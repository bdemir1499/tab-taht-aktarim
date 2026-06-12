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
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = color || '#ffffff';
            ctx.fillRect(0, 0, 128, 128);
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 50px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, 64, 64);
            const texture = new THREE.CanvasTexture(canvas);
            const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
            const geo = new THREE.PlaneGeometry(w * 0.6, h * 0.6);
            geo.translate(0, 0, 0.05); // Z-fighting engellemek için hafif öne al
            return new THREE.Mesh(geo, mat);
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
                    hinge.position.set(0, 0, -apothem); // İlk yüzey arkada başlasın
                    hinge.rotation.y = Math.PI; // Dışarı (arkaya) baksın
                    root.add(hinge);
                } else {
                    hinge.position.set(actualSideWidth, 0, 0); // Kenardan bağlanır
                    currentParent.add(hinge);
                    // Başlangıç (0) durumu KAPALI -> aradaki açı angleStep
                    group.userData.hinges.push({ obj: hinge, maxAngle: 0, initialAngle: angleStep, axis: 'y' });
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
                    topGeo.translate(0, apothem, 0); // Orijini alt kenara al
                    topGeo.rotateX(-Math.PI / 2); // Yukarı baksın ve -Z'ye (içeri) uzansın
                    const topMesh = createFaceMesh(topGeo);
                    topHinge.add(topMesh);
                    group.userData.hinges.push({ obj: topHinge, maxAngle: -Math.PI / 2, initialAngle: 0, axis: 'x' }); // DIŞA ve YUKARI açılsın
                    
                    const topLabel = createLabelMesh(faceCounter.toString() + " (ÜST)", '#aaffaa', r*1.5, r*1.5);
                    topLabel.rotation.x = -Math.PI / 2;
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
                    bottomGeo.translate(0, -apothem, 0); // Orijini üst kenara al
                    bottomGeo.rotateX(Math.PI / 2); // Aşağı baksın ve -Z'ye (içeri) uzansın
                    const bottomMesh = createFaceMesh(bottomGeo);
                    bottomHinge.add(bottomMesh);
                    group.userData.hinges.push({ obj: bottomHinge, maxAngle: Math.PI / 2, initialAngle: 0, axis: 'x' }); // DIŞA ve AŞAĞI açılsın

                    const bottomLabel = createLabelMesh(faceCounter.toString() + " (ALT)", '#aaaaff', r*1.5, r*1.5);
                    bottomLabel.rotation.x = Math.PI / 2;
                    bottomLabel.rotation.y = Math.PI; // Açıldığında düz (upright) görünmesi için 180 derece çevir
                    bottomLabel.position.set(0, 0, 0);
                    bottomHinge.add(bottomLabel);
                    faceCounter++;
                }
            }
            group.userData.shiftX = (actualSideWidth / 2) * (1 - sides);
        } 
        // PİRAMİTLER (Yaprak gibi dışa doğru açılır)
        else if (type.startsWith('pyramid_')) {
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
            baseLabel.material.side = THREE.FrontSide;
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
                
                // Arka yüzeyin ters görünmesini engellemek için metin materyalinin side ayarını düzelt
                triLabel.material.side = THREE.FrontSide;
                
                hinge.add(triLabel);
                faceCounter++;
                
                // Başlangıç (0) -> Kapalı (içeri eğik), Bitiş (1) -> Açık (dışarı yatay)
                group.userData.hinges.push({ obj: hinge, maxAngle: Math.PI / 2, initialAngle: -inwardAngle, axis: 'x' });
            }
        }
        // KONİ (Daire dilimi şeklinde açılır)
        else if (type === 'pyramid_cone') {
            const r = size;
            const l = Math.sqrt(r * r + height * height); // Ana doğru
            
            const sides = 32;
            const apothem = r;
            const sideWidth = 2 * Math.PI * r / sides;
            const slantHeight = l;
            const inwardAngle = Math.atan2(apothem, height);

            // Taban (Sabit değil, açıldığında yana kayacak)
            const baseHinge = new THREE.Group();
            baseHinge.position.y = -height / 2;
            group.add(baseHinge);
            const baseGeo = new THREE.CircleGeometry(r, 32);
            baseGeo.rotateX(-Math.PI / 2);
            const baseMesh = createFaceMesh(baseGeo);
            baseHinge.add(baseMesh);

            const baseLabel = createLabelMesh(faceCounter.toString() + " (ALT)", '#aaaaff', r*1.5, r*1.5);
            baseLabel.rotation.x = -Math.PI / 2;
            baseHinge.add(baseLabel);
            faceCounter++;

            // Yan yüzeyler (çiçek gibi açılır)
            for (let i = 0; i < sides; i++) {
                const angle = (i * Math.PI * 2) / sides;
                const hinge = new THREE.Group();
                hinge.position.set(Math.cos(angle) * apothem, -height / 2, -Math.sin(angle) * apothem);
                hinge.rotation.order = 'YXZ'; // Önce X (içeri eğilme), sonra Y (yönelme) uygulanmalı
                hinge.rotation.y = angle + Math.PI / 2; // İçeri bakması için yönlendirme
                
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
                
                // Başlangıç (0) -> Kapalı (içeri eğik), Bitiş (1) -> Açık (dışarı yatay)
                group.userData.hinges.push({ obj: hinge, maxAngle: Math.PI / 2, initialAngle: -inwardAngle, axis: 'x' });
            }
        }

        // Şekil kapalıyken Z ekseni boyunca uzansın (böylece XY düzleminde dik durur)
        group.rotation.x = Math.PI / 2;

        const outerGroup = new THREE.Group();
        outerGroup.userData = group.userData;
        outerGroup.userData.innerGroup = group; // İç grubu sakla ki rotasyonu nötrleyebilelim
        if (type.startsWith('prism_')) {
            outerGroup.userData.shiftX = group.userData.shiftX;
        }
        outerGroup.add(group);

        return outerGroup;
    },

    updateUnfold: function(group, openRatio) {
        if (!group.userData.isFoldable || !group.userData.hinges) return;
        
        group.userData.hinges.forEach(h => {
            const initial = h.initialAngle || 0;
            const currentAngle = initial + (h.maxAngle - initial) * openRatio;
            h.obj.rotation[h.axis] = currentAngle;
        });

        // Şekil açıldıkça tam karşıdan görünmesi için rotasyonu otomatik olarak düzelt
        const inner = group.userData.innerGroup;
        if (inner) {
            // Perspektif yanılgısını (kameranın aşağıdan bakması) önlemek için şekli hafif geriye (yukarı) yatırıyoruz: 0.25 radyan
            const tiltOffset = 0.25; 

            if (group.userData.shapeType.startsWith('pyramid_')) {
                // Piramitleri normal düzlemde tut (Z yukarı bakar). Açıldığında arkaya değil ÖNE doğru eğilsin (Math.PI)
                const qClosed = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
                const qOuterInverse = group.quaternion.clone().invert();
                const qOpenTarget = qOuterInverse.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI - tiltOffset));
                
                // Quaternion slerp ile pürüzsüz geçiş
                inner.quaternion.copy(qClosed).slerp(qOpenTarget, openRatio);
            } else {
                // Prizmalar vs için (Kamera açısından dik durmasını sağla)
                const qClosed = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
                const qOuterInverse = group.quaternion.clone().invert();
                
                // Tam açıldığında kendi Y ekseni etrafında 180 derece (Math.PI) dönerek şeridin ön yüzünü kameraya çevirsin
                const qSpin = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
                const targetWorld = qClosed.clone().multiply(qSpin);
                const qOpenTarget = qOuterInverse.multiply(targetWorld);
                
                // Prizmaları da açıldıkça tam kameraya hizala ve döndür
                inner.quaternion.copy(qClosed).slerp(qOpenTarget, openRatio);
            }

            // Prizmaların açınımı yana doğru uzadığı için, açıldıkça şekli ortala
            if (group.userData.shiftX) {
                inner.position.x = group.userData.shiftX * openRatio;
            }
        }
    }
};
