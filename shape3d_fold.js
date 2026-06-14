// 3D Şekillerin Açınım (Katlama) Mantığı İçin Ek Modül
window.Foldable3D = {
    createFoldableGroup: function(type, size, mainMaterial, edgeMaterial) {
        if (type === 'sphere') return null; // Küre için açınım hesaplanmaz, normal çizim için null dönüyoruz

        const group = new THREE.Group();
        group.userData.isFoldable = true;
        group.userData.shapeType = type;
        group.userData.baseSize = size;
        group.userData.hinges = []; // Katlanacak parçaların listesi

        // Özel mesh oluşturucu (edge çizgileriyle birlikte)
        const createFaceMesh = (geometry) => {
            const mesh = new THREE.Mesh(geometry, mainMaterial);
            mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial));
            return mesh;
        };

        const createLabelMesh = (text, color, w, h) => {
            return new THREE.Group(); // İsteğiniz üzerine etiketler kaldırıldı
        };

        let faceCounter = 1;

        const height = size * 2;
        
        // SİLİNDİR VE PRİZMALAR (Yan yüzeyler rulo gibi açılır)
        if (type.startsWith('prism_')) {
            let sides = 4;
            let r = size;
            if (type === 'prism_cube') { sides = 4; r = size; }
            if (type === 'prism_rect') { sides = 4; r = size * 1.5; }
            if (type === 'prism_3') sides = 3;
            if (type === 'prism_5') sides = 5;
            if (type === 'prism_6') sides = 6;
            if (type === 'prism_cylinder') sides = 32;

            const angleStep = (Math.PI * 2) / sides;
            // Düzgün çokgen tabanlı prizma için yan kenar uzunluğu:
            const sideWidth = 2 * r * Math.sin(Math.PI / sides);
            const apothem = r * Math.cos(Math.PI / sides);
            
            // Eğer rect prizma ise, kenarlar r ve size olarak değişir (şuan düz mantık gidiyoruz)
            let actualSideWidth = sideWidth;
            if (type === 'prism_rect') actualSideWidth = size; // Basit yaklaşım

            // Ana kök (yan yüzlerin bağlandığı ilk yüz)
            const root = new THREE.Group();
            group.add(root);
            
            let currentParent = root;

            for (let i = 0; i < sides; i++) {
                const hinge = new THREE.Group();
                // İlk yüzey sabit, diğerleri birbirine ekleniyor
                if (i === 0) {
                    hinge.position.set(-actualSideWidth / 2, 0, apothem); // İlk yüzey ÖNDE ve ortalanmış başlasın
                    hinge.rotation.y = 0; // Kameraya (dışa) baksın
                    root.add(hinge);
                } else {
                    hinge.position.set(actualSideWidth, 0, 0); // Kenardan bağlanır
                    currentParent.add(hinge);
                    // Başlangıç (0) durumu KAPALI -> aradaki açı -angleStep (Önden yana doğru açılması için)
                    group.userData.hinges.push({ obj: hinge, maxAngle: 0, initialAngle: -angleStep, axis: 'y' });
                }
                
                // Panel geometrisi (merkezi hinge'in ortasında olacak şekilde ayarlanır)
                const panelGeo = new THREE.PlaneGeometry(actualSideWidth, height);
                panelGeo.translate(actualSideWidth / 2, 0, 0); // Pivot noktasını sol kenara al
                const panelMesh = createFaceMesh(panelGeo);
                hinge.add(panelMesh);
                
                // Hata ayıklama etiketi ekle
                const label = createLabelMesh(faceCounter.toString(), '#ffaaaa', actualSideWidth, Math.min(height, actualSideWidth));
                label.position.set(actualSideWidth / 2, 0, 0);
                hinge.add(label);
                faceCounter++;

                currentParent = hinge;

                // Kapakları simetrik açınım için orta panele ekle
                const middleIndex = Math.floor((sides - 1) / 2);
                if (i === middleIndex) {
                    // Üst kapak
                    const topHinge = new THREE.Group();
                    topHinge.position.set(actualSideWidth / 2, height / 2, 0);
                    hinge.add(topHinge);
                    
                    let topGeo;
                    if (type === 'prism_cylinder') {
                        topGeo = new THREE.CircleGeometry(r, sides);
                    } else {
                        topGeo = new THREE.CircleGeometry(r, sides, 0); 
                        topGeo.rotateZ(-Math.PI / 2 - Math.PI / sides); // Alt kenarı yatay (X'e paralel) yap
                    }
                    topGeo.rotateZ(Math.PI); // Geometriyi 180 derece çevirerek içeri doğru bakmasını sağla
                    topGeo.translate(0, -apothem, 0); // Orijini kenara tam oturt
                    topGeo.rotateX(-Math.PI / 2); // Yukarı baksın ve +Z'ye (içeri) uzansın
                    const topMesh = createFaceMesh(topGeo);
                    topHinge.add(topMesh);
                    group.userData.hinges.push({ obj: topHinge, maxAngle: -Math.PI / 2, initialAngle: 0, axis: 'x' }); // DIŞA ve YUKARI açılsın
                    
                    const topLabel = createLabelMesh(faceCounter.toString() + " (ÜST)", '#aaffaa', r*1.5, r*1.5);
                    topLabel.rotation.x = Math.PI / 2; // İçeri baksın, açılınca dışarı dönecek
                    topLabel.position.set(0, 0, 0);
                    topHinge.add(topLabel);
                    faceCounter++;

                    // Alt kapak
                    const bottomHinge = new THREE.Group();
                    bottomHinge.position.set(actualSideWidth / 2, -height / 2, 0);
                    hinge.add(bottomHinge);
                    
                    let bottomGeo;
                    if (type === 'prism_cylinder') {
                        bottomGeo = new THREE.CircleGeometry(r, sides);
                    } else {
                        bottomGeo = new THREE.CircleGeometry(r, sides, 0);
                        bottomGeo.rotateZ(Math.PI / 2 - Math.PI / sides); // İlk kenarı yatay yap
                    }
                    bottomGeo.rotateZ(Math.PI); // Geometriyi 180 derece çevir
                    bottomGeo.translate(0, apothem, 0); // Orijini kenara tam oturt
                    bottomGeo.rotateX(Math.PI / 2); // Aşağı baksın ve +Z'ye (içeri) uzansın
                    const bottomMesh = createFaceMesh(bottomGeo);
                    bottomHinge.add(bottomMesh);
                    group.userData.hinges.push({ obj: bottomHinge, maxAngle: Math.PI / 2, initialAngle: 0, axis: 'x' }); // DIŞA ve AŞAĞI açılsın

                    const bottomLabel = createLabelMesh(faceCounter.toString() + " (ALT)", '#aaaaff', r*1.5, r*1.5);
                    bottomLabel.rotation.x = -Math.PI / 2; // İçeri baksın
                    bottomLabel.rotation.y = Math.PI; // Açıldığında düz durması için Y'de çevir
                    bottomLabel.position.set(0, 0, 0);
                    bottomHinge.add(bottomLabel);
                    faceCounter++;
                }
            }
            group.userData.shiftX = (actualSideWidth / 2) * (1 - sides);
        } 
        // PİRAMİTLER (Yaprak gibi dışa doğru açılır)
        else if (type.startsWith('pyramid_') && type !== 'pyramid_cone') {
            let sides = 4;
            if (type === 'pyramid_3') sides = 3;
            if (type === 'pyramid_4') sides = 4;
            if (type === 'pyramid_5') sides = 5;
            if (type === 'pyramid_6') sides = 6;
            
            const r = size;
            const apothem = r * Math.cos(Math.PI / sides);
            const sideWidth = 2 * r * Math.sin(Math.PI / sides);
            const slantHeight = Math.sqrt(height * height + apothem * apothem);
            const inwardAngle = Math.atan2(apothem, height); // İçeri doğru eğim açısı

            // Taban
            const baseGeo = new THREE.CircleGeometry(r, sides, Math.PI / sides);
            baseGeo.rotateX(-Math.PI / 2);
            const baseMesh = createFaceMesh(baseGeo);
            baseMesh.position.y = -height / 2;
            group.add(baseMesh);

            const baseLabel = createLabelMesh(faceCounter.toString() + " (ALT)", '#aaaaff', r*1.5, r*1.5);
            baseLabel.rotation.x = -Math.PI / 2;
            baseLabel.position.y = -height / 2;
            group.add(baseLabel);
            faceCounter++;

            // Yan üçgenler
            for (let i = 0; i < sides; i++) {
                const angle = (i * Math.PI * 2) / sides;
                const hinge = new THREE.Group();
                
                // Menteşeyi taban kenarına yerleştir
                hinge.position.set(
                    Math.cos(angle) * apothem,
                    -height / 2,
                    -Math.sin(angle) * apothem
                );
                // Kenara dik bakması için y ekseni etrafında döndür (+90 derece ile local Z içeri bakar)
                hinge.rotation.order = 'YXZ'; // Önce X (içeri eğilme), sonra Y (yönelme) uygulanmalı
                hinge.rotation.y = angle + Math.PI / 2;
                
                const triGeo = new THREE.BufferGeometry();
                const vertices = new Float32Array([
                    -sideWidth / 2, 0, 0,
                    sideWidth / 2, 0, 0,
                    0, slantHeight, 0
                ]);
                triGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
                triGeo.computeVertexNormals();
                
                const triMesh = createFaceMesh(triGeo);
                hinge.add(triMesh);
                group.add(hinge);
                
                const triLabel = createLabelMesh(faceCounter.toString(), '#ffaaaa', sideWidth, slantHeight*0.5);
                triLabel.position.set(0, slantHeight*0.3, 0);
                
                hinge.add(triLabel);
                faceCounter++;
                
                // Başlangıç (0) -> Kapalı (içeri eğik), Bitiş (1) -> Açık (dışarı yatay)
                group.userData.hinges.push({ obj: hinge, maxAngle: Math.PI / 2, initialAngle: -inwardAngle, axis: 'x' });
            }
        }
        // KONİ (Gerçek daire dilimi ve taban şeklinde açılır)
        else if (type === 'pyramid_cone') {
            const r = size;
            const h = height; 
            const l = Math.sqrt(r * r + h * h); // Ana doğru (slant height)
            const N = 32;
            const Theta = (2 * Math.PI * r) / l; // Açınım sektör açısı

            // 1. Yanal Yüzey (Kağıt Huni) - Özel Geometri
            const geo = new THREE.BufferGeometry();
            const vertices = new Float32Array((N + 2) * 3);
            const indices = [];

            // Tepe noktası (Apex) - Index 0
            vertices[0] = 0; vertices[1] = h; vertices[2] = 0;
            
            const initialVectors = [];
            const targetVectors = [];
            
            for (let j = 0; j <= N; j++) {
                // j = N/2 arka taraf (alpha = pi) olacak şekilde dağıt
                const alpha_j = (j - N/2) * (Math.PI * 2 / N) + Math.PI;
                const vx0 = r * Math.sin(alpha_j);
                const vy0 = -h;
                const vz0 = r * Math.cos(alpha_j);
                initialVectors.push(new THREE.Vector3(vx0, vy0, vz0));
                
                // Açık Durum (Flat State) - Yönü ters çeviriyoruz ki çaprazlama olmasın
                const phi_j = -(j - N/2) * (Theta / N);
                const vx1 = l * Math.sin(phi_j);
                const vy1 = -l * Math.cos(phi_j);
                const vz1 = 0;
                targetVectors.push(new THREE.Vector3(vx1, vy1, vz1));
                
                // İlk pozisyonları ayarla
                vertices[(j+1)*3] = vx0;
                vertices[(j+1)*3+1] = vy0 + h; // apex'e göre mutlak pozisyon
                vertices[(j+1)*3+2] = vz0;
                
                if (j < N) {
                    indices.push(0, j+1, j+2);
                }
            }
            
            geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
            geo.setIndex(indices);
            geo.computeVertexNormals();
            
            const lateralMesh = createFaceMesh(geo);
            group.add(lateralMesh);
            
            group.userData.coneData = {
                N: N,
                h: h,
                l: l,
                initialVectors: initialVectors,
                targetVectors: targetVectors,
                mesh: lateralMesh
            };
            
            // 2. Taban Dairesi ve Menteşe (Arka noktadan asılı)
            const baseHinge = new THREE.Group();
            baseHinge.position.set(0, 0, -r); // j=N/2 kapalı başlangıç konumu
            group.add(baseHinge);
            
            const baseGeo = new THREE.CircleGeometry(r, 32);
            baseGeo.rotateX(-Math.PI / 2); // XZ düzleminde yatay
            const baseMesh = createFaceMesh(baseGeo);
            baseMesh.position.set(0, 0, r); // Merkeze göre offset
            baseHinge.add(baseMesh);
            
            const baseLabel = createLabelMesh(faceCounter.toString() + " (ALT)", '#aaaaff', r*1.5, r*1.5);
            baseLabel.rotation.x = -Math.PI / 2;
            baseLabel.position.set(0, 0, r);
            baseHinge.add(baseLabel);
            
            // Açıldığında tabanın AŞAĞI doğru (ters yöne) inmesi istendi
            group.userData.hinges.push({ obj: baseHinge, maxAngle: -Math.PI / 2, initialAngle: 0, axis: 'x' });
            group.userData.coneData.baseHinge = baseHinge;
        }

        // Şekil kapalıyken Z ekseni boyunca uzansın (böylece XY düzleminde dik durur)
        group.rotation.x = Math.PI / 2;

        const outerGroup = new THREE.Group();
        outerGroup.userData = group.userData;
        outerGroup.userData.innerGroup = group; // İç grubu sakla ki rotasyonu nötrleyebilelim

        if (type === 'prism_cube' || type === 'prism_rect') {
            outerGroup.rotation.x = Math.PI / 10;
            outerGroup.rotation.y = Math.PI - Math.PI / 10;
        }

        if (type.startsWith('prism_')) {
            outerGroup.userData.shiftX = group.userData.shiftX;
        }
        outerGroup.add(group);

        return outerGroup;
    },

    updateUnfold: function(group, openRatio) {
        if (!group.userData.isFoldable) return;
        
        if (group.userData.hinges) {
            group.userData.hinges.forEach(h => {
                const initial = h.initialAngle || 0;
                const currentAngle = initial + (h.maxAngle - initial) * openRatio;
                h.obj.rotation[h.axis] = currentAngle;
            });
        }
        
        // Koni'nin özel matematiksel yüzey açınımı
        if (group.userData.shapeType === 'pyramid_cone' && group.userData.coneData) {
            const data = group.userData.coneData;
            const positions = data.mesh.geometry.attributes.position.array;
            
            for (let j = 0; j <= data.N; j++) {
                const v0 = data.initialVectors[j];
                const v1 = data.targetVectors[j];
                // SLERP yerine normalize edilmiş LERP kullanarak küresel interpole et
                const current = new THREE.Vector3().lerpVectors(v0, v1, openRatio).normalize().multiplyScalar(data.l);
                
                positions[(j+1)*3] = current.x;
                positions[(j+1)*3+1] = current.y + data.h;
                positions[(j+1)*3+2] = current.z;
                
                // Menteşe pozisyonunu arka nokta (j = N/2) ile takip et
                if (j === data.N / 2 && data.baseHinge) {
                    data.baseHinge.position.set(current.x, current.y + data.h, current.z);
                }
            }
            data.mesh.geometry.attributes.position.needsUpdate = true;
            data.mesh.geometry.computeVertexNormals();
            
            // Wireframe çizgi ağını canlandır
            data.mesh.children.forEach(child => {
                if (child.isLineSegments) {
                    child.geometry.dispose();
                    child.geometry = new THREE.EdgesGeometry(data.mesh.geometry);
                }
            });
        }

        // Şekil açıldıkça tam karşıdan görünmesi için rotasyonu otomatik olarak düzelt
        const inner = group.userData.innerGroup;
        if (inner) {
            // Perspektif yanılgısını (kameranın aşağıdan bakması) önlemek için şekli hafif geriye (yukarı) yatırıyoruz: 0.25 radyan
            const tiltOffset = 0.25; 

            // Tüm şekiller için (Prizmalar ve Piramitler): 
            // Kapalıyken (openRatio=0) outerGroup'un izometrik açısı geçerlidir.
            // Açıldıkça (openRatio=1) outerGroup'un açısını yok edip tam karşıdan (dik) görünmesini sağlarız.
            const qClosed = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
            const qOuterInverse = group.quaternion.clone().invert();
            const qOpenTarget = qOuterInverse.multiply(qClosed.clone());
            
            // Slerp ile izometrik -> düz geçişi
            inner.quaternion.copy(qClosed).slerp(qOpenTarget, openRatio);

            // KULLANICI İSTEĞİ: Açılırken büyüyüp kaba görüntü oluşturmasını engellemek için,
            // açılma oranına göre şekli orantılı olarak küçültüyoruz. (Örn: tam açıkken %60 boyutuna iner)
            const targetScale = 0.55; 
            const currentScale = 1 - (openRatio * (1 - targetScale));
            inner.scale.set(currentScale, currentScale, currentScale);

            // Prizmaların açınımı yana doğru uzadığı için, açıldıkça şekli ortala
            if (group.userData.shiftX) {
                inner.position.x = group.userData.shiftX * openRatio;
            }
        }
    }
};
