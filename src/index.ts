import * as THREE from "three";
 
 window.addEventListener("DOMContentLoaded", () => {
   // レンダラーを作成
   const renderer = new THREE.WebGLRenderer();
   // レンダラーのサイズを設定
   renderer.setSize(500, 500);
   // canvasをbodyに追加
   document.body.appendChild(renderer.domElement);
 
   // シーンを作成
   const scene = new THREE.Scene();
 
   // カメラを作成
   const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 10000);
   camera.position.set(0, 0, 1000);
 
   // 箱を作成
   const geometry = new THREE.BoxGeometry(250, 250, 250);
   const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
   const box = new THREE.Mesh(geometry, material);
   box.position.z = -5;
   scene.add(box);

  // プラス１かマイナス1を得る
  const getPlusOneOrMinucOne = function() {
    return (Math.round(Math.random()) * 2 - 1 );
  }
  // 指定された範囲内の自然数を得る
  const getNatulralNumber = function(maxInt:number){
    return getPlusOneOrMinucOne() * Math.floor(Math.random()*(maxInt-10)*10);
  }
  // 箱を作成
  const createBox = () => {
    const geometry2 = new THREE.SphereGeometry(10, 10, 10);
    const material2 = new THREE.MeshPhongMaterial({ color: 0x3632a8 });
    const box2 = new THREE.Mesh(geometry2, material2);
    box2.position.x = getNatulralNumber(50);
    box2.position.y = getNatulralNumber(50);
    box2.position.z = getNatulralNumber(50);
    scene.add(box2);
  }

 
   // 平行光源を生成
   const light = new THREE.DirectionalLight(0xffffff);
   light.position.set(1, 1, 1);
   scene.add(light);
 
   let counter = 0;
   const tick = (): void => {
     counter += 1;

     if(counter < 1800){
      requestAnimationFrame(tick);
     }
     
 
     camera.rotation.z += 0.01;

     box.rotation.x -= 0.01;
     box.rotation.y -= 0.01;
     //camera.rotation.y += 0.01;

     createBox();
 
     // 描画
     renderer.render(scene, camera);
   };
   tick();
 
   console.log("Hello Three.js");
 });