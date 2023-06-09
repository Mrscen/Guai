<template>
    <div id="container" @click="load3D('pants','http://47.113.145.33:3000/upload/86a42118d47fea41aa09a89613ef2f8f.png')"></div>
</template>

<script>
import * as Three from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' //用于载入glTF/glb文件 2.0资源的加载器。
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' // 解码器，gltf、glb模型经3D软件压缩导出后，在threejs用gltfloader加载下，必须借助DRACOLoader解压，否则会报错。
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 轨道控制器, 可以使得相机围绕目标进行轨道运动。
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader' // 材质
export default {
  name: "NFtRole",
  // props: {
  //   fileName: {
  //     type: String,
  //     required: true
  //   }
  // },
  data () {
    return {
      /**相机、轨道、场景、渲染器 */
      camera: null,
      controls: null,
      scene: null,
      renderer: null,
    }
  },
  mounted () {
    this.init()
    this.animate()
    this.load3D('shoes')
    this.loadLight()
  },
  methods: {
    init () {
      // 指定标签
      const container = document.getElementById('container') //获取元素    

      // 初始化场景
      this.scene = new Three.Scene()

      // 初始化相机（模拟人眼）
      this.camera = new Three.PerspectiveCamera(5, container.clientWidth / container.clientHeight, 0.1, 10000)
      this.camera.position.set(0, 0, 800) //相机位置设置

      // 初始化渲染器
      this.renderer = new Three.WebGLRenderer({ antialias: true }) // 像素渲染器  开启抗锯齿
      this.renderer.setClearColor(new Three.Color(0xF7F2F1))  //更改背景色
      this.renderer.setSize(container.clientWidth, container.clientHeight)  // 设置尺寸
      this.renderer.shadowMap.enabled = true   // 阴影      
      container.appendChild(this.renderer.domElement)  //将初始化好的渲染器放入容器中

      // 设置相机轨道
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)  //设置相机轨道
      this.controls.target = new Three.Vector3(0, 0, 0)

      // AxesHelper：辅助观察的坐标系
      // const axesHelper = new Three.AxesHelper(150);
      // this.scene.add(axesHelper);

    },
    // 创建加载器和载入模型
    load3D (name,url) {
      // console.log(name);
      const changeName = { hair: 'Object_2', glasses: 'Object_3', pants: 'Object_4', shoes: 'Object_5', skin: 'Object_6', clothes: 'Object_7' }
      const meshName = changeName[name];
      // 贴图
      // let texture = new Three.TextureLoader().load('dog.jpg');
      // let material = new Three.MeshBasicMaterial({
      //   map: texture
      // })
      // let circleGeometry = new Three.CircleGeometry(3);
      // let circle = new Three.Mesh(circleGeometry, material);
      // circleGeometry.translate(10, 10, 5);
      // circle.material.map.repeat.set(1, 1); // 缩放贴图
      // circle.material.map.wrapS = Three.RepeatWrapping; // 设置水平方向的重复方式
      // circle.material.map.wrapT = Three.RepeatWrapping; // 设置垂直方向的重复方式
      // circle.material.needsUpdate = true;
      // this.scene.add(circle);

      // 导入glb/gltf模型
      const loader = new GLTFLoader() // gltf/glb文件的资源加载器
      const dracoLoader = new DRACOLoader()  // gltf/glb文件的解码器
      dracoLoader.setDecoderPath('/draco/') // 解码器路径
      dracoLoader.preload() // 预先加载
      loader.setDRACOLoader(dracoLoader) // 资源加载器设置解码器

      loader.load("/Model3D/fireGirl/glbfile.glb", gltf => {
        const scene = gltf.scene
        scene.scale.set(13, 13, 13); //放大obj组对象
        scene.position.set(0, -30, 0); //放大obj组对象
        scene.traverse(function (child) {

          // 序号 -> 9衣服clothes 8皮肤skin 7鞋子shoes 6裤子pants 5墨镜glasses 4头发hair 3 2 1 0无
          // mesh.name -> 头发Object_2 墨镜Object_3 裤子Object_4 鞋子Object_5 皮肤Object_6 衣服Object_7 
          if (child instanceof Three.Mesh && child.name === meshName) {
            //设置模型服饰
            let loader = new Three.TextureLoader()
            let texture = loader.load(url);
            child.material.map = texture
          }
        });

        // scene.traverse(child => {
        //   if (child.isMesh) {
        //     let texture = new Three.TextureLoader().load('dog.jpg');
        //     let material = new Three.MeshBasicMaterial({
        //       map: texture,
        //       normalMap: texture, //法线贴图
        //       //设置深浅程度，默认值(1,1)。
        //       normalScale: new Three.Vector3(3, 3, 3),
        //     })
        //     let circleGeometry = new Three.CircleGeometry(3);
        //     let mesh = new Three.Mesh(circleGeometry, material);
        //     circleGeometry.translate(0, 10, 5);
        //     // mesh.material.map.wrapS = Three.RepeatWrapping; // 设置水平方向的重复方式
        //     // mesh.material.map.wrapT = Three.RepeatWrapping; // 设置垂直方向的重复方式
        //     mesh.material.needsUpdate = true;
        //     child.parent.add(mesh)
        //     this.scene.add(mesh)
        //   }
        // })

        this.scene.add(gltf.scene)
      }, (xhr) => {
        console.log('加载完成')
      }, (error) => {
        console.error('加载失败')
      })

      // 导入obj模型mtl材质
      // const objectLoader = new OBJLoader() // obj文件的资源加载器
      // const mtlLoader = new MTLLoader();// 材质文件加载器
      // mtlLoader.load(`Model3D/${this.fileName}.mtl`, materials => {
      //   // 返回一个包含材质的对象MaterialCreator
      //   // console.log(materials);
      //   // let newMaterial = materials.material.clone();
      //   // console.log(newMaterial);
      //   // newMaterial.color = new Color('#D3C542'); //重新修改颜色
      //   // materials.material = newMaterial;
      //   //obj的模型会和MaterialCreator包含的材质对应起来
      //   objectLoader.setMaterials(materials);
      //   objectLoader.load(`Model3D/${this.fileName}.obj`, mesh => {
      //     console.log(mesh);
      //     mesh.position.set(0, 0, 0);
      //     mesh.scale.set(3, 3, 3); //放大obj组对象
      //     this.scene.add(mesh);//返回的组对象插入场景中
      //   })
      // })


    },
    loadLight () {
      // 点光源
      const point = new Three.PointLight(0xffffff) // 光源颜色
      point.position.set(4000, 4000, 4000) // 点光源位置
      this.scene.add(point) // 点光源添加到场景中
      // 环境光
      const ambient = new Three.AmbientLight(0xFFFFFF)  // 环境光颜色
      this.scene.add(ambient)
    },
    animate () {
      requestAnimationFrame(this.animate) //windows下的api 请求动画帧，循环即可实现动画渲染
      this.renderer.render(this.scene, this.camera) //执行渲染
    },
    // 更换服装
    changeClothing () {
      this.load3D ('hair')
    }
  }
};
</script>


<style>
#container {
  width: 100%;
  height: 100%;
}
</style> 