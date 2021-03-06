import React, { Component } from 'react';
import { Modal, Radio, Upload, message, Button, Icon } from 'antd';
import * as qiniu from 'qiniu-js'
import domtoimage from 'dom-to-image';
import axios from 'axios'
import './App.css';

const RadioGroup = Radio.Group;

class App extends Component {
  state = {
    visible: false,
    value: 1,
    fileLength: 0
  }
  componentDidMount() {
    var myfile = document.getElementById('file');
    var that = this;
    myfile.onchange = function (event) {
      const filesList = event.target.files;
      // const config = {
      //   useCdnDomain: true,
      //   region: qiniu.region.z0
      // };
      // let token = '';
      // let num = 0;
      // var observer = {
      //   next(res) {
      //     // ...
      //     // console.log('next', res)
      //   },
      //   error(err) {
      //     // ...
      //     console.log('error', err)
      //   },
      //   complete(res) {
      //     // ...
      //     num++;
      //     if (num === filesList.length) {
      //       message.info('图片上传成功')
      //       console.log('图片上传成功');
      //     }
      //     console.log('res', res)
      //   }
      // }
      that.setState({fileLength: filesList.length})
      // for (let i = 0; i < filesList.length; i++) {
      //   const key = filesList[i].name;
      //   const file = filesList[i];
      //   const putExtra = {
      //     fname: filesList[i].name,
      //     params: {},
      //     mimeType: [] || null
      //   };
      //   axios.post('http://47.99.133.229:3100/getqntoken', { fileName: key }).then(res => {
      //     token = res.data.token;
      //     const observable = qiniu.upload(file, key, token, putExtra, config)
      //     var subscription = observable.subscribe(observer)
      //   })
      // }
    }
  }
  // 模板选择弹框确认
  handleOk = () => {
    this.setState({
      visible: false
    })
  }
  // 模板选择弹框取消
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
  handleChooseTemplete = () => {
    this.setState({
      visible: true
     })
  }
  handleCircleImage1 = () => {
    let tpl2num = 0;
    let tpl2li = '';
    for (let i = 0; i < this.state.fileLength / 14; i++) {
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px"><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px"><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
    }
  }
  handleCircleImage2 = () => {
    let tpl2num = 0;
    let tpl2li = '';
    for (let i = 0; i < this.state.fileLength / 14; i++) {
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px"><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="text-align: center; margin: 40px 0"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%901.png?t" style="width: 310px" /></div><div style="text-align: right"><img id="img2" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 560px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="display: flex;justify-content: flex-start; margin-top: 60px"><div><img id="img3" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 560px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-left: 70px"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%902.png" style="width: 24px" /></div></div><div style="margin-top: 30px;"><div><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%903.png" style="width: 480px" /></div></div><div style="margin-top: 50px"><img id="img4" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px; text-align: right"><img id="img5" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 630px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 20px; text-align: right"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%904.png" style="width: 400px" /></div><div style="margin-top: 60px"><img id="img6" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="position: relative; margin-top: 60px"><img id="img7" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 620px" /><div style="position: absolute; bottom: -60px; right: 10px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%905.png" style="width: 430px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px"><img id="img8" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 30px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%906.png" style="width: 410px" /></div><div style="margin-top: 20px"><img id="img9" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 60px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%908.png" style="width: 210px" /></div><div style="margin-top: 20px; text-align: center"><img id="img10" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 650px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 40px; text-align: center"><img id="img11" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 650px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 40px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%908.png" style="width: 210px" /></div><div style="margin-top: 60px"><img id="img12" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="display: flex; margin-top: 60px;"><div style="margin-left: 40px"><img id="img13" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 480px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-left: 70px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF2%E7%B4%A0%E6%9D%907.png" style="width: 80px" /></div></div><div style="margin-top: 80px"><img id="img14" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
    }
  }
  handleCircleImage3 = () => {
    let tpl2num = 0;
    let tpl2li = '';
    for (let i = 0; i < this.state.fileLength / 12; i++) {
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px"><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="text-align: center; margin: 40px 0"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%901.png?t" style="width: 610px" /></div><div style="text-align: right"><img id="img2" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 560px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="display: flex;justify-content: flex-start; margin-top: 60px"><div><img id="img3" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 560px" /></div><div style="margin-left: 70px"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%902.png" style="width: 24px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 30px;"><div><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%903.png" style="width: 480px" /></div></div><div style="margin-top: 50px"><img id="img4" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="position: relative;margin-top: 50px;text-align: center;"><img id="img5" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 530px" /><div style="position: absolute; top: 10px;left: 60px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%904.png" style="width: 350px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 30px; margin-left: 110px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%905.png" style="width: 400px" /></div><div style="margin-top: 60px"><img id="img6" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="position: relative; margin-top: 60px"><img id="img7" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 620px" /><div style="position: absolute; bottom: -60px; right: 10px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%906.png" style="width: 430px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 120px"><img id="img8" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 30px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%907.png" style="width: 410px" /></div><div style="margin-top: 20px"><img id="img9" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px; text-align: right"><img id="img10" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 630px" /></div><div style="margin-top: 20px; text-align: right"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%908.png" style="width: 400px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 30px"><img id="img11" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="display: flex; margin-top: 40px;"><div style="margin-left: 40px"><img id="img12" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 480px" /></div><div style="margin-left: 70px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF3%E7%B4%A0%E6%9D%909.png" style="width: 80px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
    }
  }
  handleCircleImage4 = () => {
    let tpl2num = 0;
    let tpl2li = '';
    for (let i = 0; i < this.state.fileLength / 13; i++) {
      // tpl2num++;
      // tpl2li += '<div style="margin-top: 80px"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%901.png" style="width: 750px" /></div><div style="padding: 0 20px; margin-top: 50px; display: flex;justify-content: space-between;"><div><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 210px" /></div><div><img id="img2" src="http://assets.janggwa.cn/1(' + tpl2num + 1 + ').jpg?t=' + new Date() + '" style="width: 210px" /></div><div><img id="img3" src="http://assets.janggwa.cn/1(' + tpl2num + 2 + ').jpg?t=' + new Date() + '" style="width: 210px" /></div></div>';
      // tpl2num = tpl2num + 2;
      // if (tpl2num === this.state.fileLength) {
      //   return tpl2li;
      // }
      tpl2num++;
      tpl2li += '<div style="margin-top: 50px"><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="position: relative;margin-top: 80px;text-align: right;"><img id="img2" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 700px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px; margin-left: 50px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%903.png" style="width: 330px" /></div><div style="margin-top: 60px"><img id="img3" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="position: relative; margin-top: 100px; margin-left: 50px"><div style="display: flex; justify-content: flex-start; align-items: flex-end;"><div><img id="img4" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 620px" /></div><div style="margin-bottom: 50px"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%904.png" style="width: 60px;" /></div></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 70px"><img id="img5" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div><div style="margin-top: 50px; text-align: right; margin-right: 110px"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%905.png" style="width: 140px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="display: flex; justify-content: flex-start; align-items: flex-end; margin-top: 30px"><div><img id="img6" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 640px" /></div><div><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%906.png" style="width: 100px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="display: flex; justify-content: flex-start; align-items: flex-start; margin-top: 20px;"><div><img id="img7" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 640px" /></div><div><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%907.png" style="width: 100px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 100px;"><img id="img8" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 50px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%908.png" style="width: 370px" /></div><div style="margin-top: 50px;"><img id="img9" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 730px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 120px; text-align: right"><img id="img10" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 700px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%909.png" style="width: 290px" /></div><div style="margin-top: 50px;"><img id="img11" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="display: flex; justify-content: center; align-items: center; margin-top: 70px"><div style="margin-right: -25px; z-index: 1"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF4%E7%B4%A0%E6%9D%9010.png" style="width: 40px" /></div><div><img id="img12" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 660px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 100px;"><img id="img13" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
    }
  }
  handleCircleImage5 = () => {
    let tpl2num = 0;
    let tpl2li = '';
    for (let i = 0; i < this.state.fileLength / 10; i++) {
      tpl2num++;
      tpl2li += '<div style="position: relative;margin-top: 60px;"><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="position: relative;margin-top: 70px;text-align: right;"><img id="img2" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 700px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px; text-align: left; margin-left: 50px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF5%E7%B4%A0%E6%9D%902.jpg" style="width: 270px" /></div><div style="margin-top: 60px"><img id="img3" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 70px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF5%E7%B4%A0%E6%9D%903.jpg" style="width: 440px" /></div><div style="margin-top: 70px"><img id="img4" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 100px"><img id="img5" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 50px; text-align: right; margin-right: 110px"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF5%E7%B4%A0%E6%9D%904.jpg" style="width: 250px" /></div><div style="position: relative; margin-top: 80px;"><div style="display: flex; justify-content: flex-start; align-items: flex-end;"><div><img id="img6" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 635px" /></div><div style="margin-bottom: 10px"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF5%E7%B4%A0%E6%9D%905.jpg" style="width: 90px;" /></div></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="position: relative; margin-top: 20px;"><div style="display: flex; justify-content: flex-start; align-items: flex-start;"><div><img id="img7" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 635px" /></div><div><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF5%E7%B4%A0%E6%9D%906.jpg" style="width: 80px;" /></div></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px"><img id="img8" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 70px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF5%E7%B4%A0%E6%9D%907.jpg" style="width: 510px" /></div><div style="margin-top: 60px; text-align: center"><img id="img9" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 710px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      tpl2li += '<div style="margin-top: 70px"><img id="img10" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
    }
  }
  handleCircleImage6 = () => {
    let tpl2num = 0;
    let tpl2li = '';
    for (let i = 0; i < this.state.fileLength / 10; i++) {
      tpl2num++;
      // 1
      tpl2li += '<div style="margin-top: 50px"><img id="img1" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 2
      tpl2num++;
      tpl2li += '<div style="position: relative;margin-top: 80px;text-align: left; margin-left: 70px;"><img id="img2" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 500px; opacity: 0.5;" /><div style="position: absolute; left: 120px; top: -40px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%901.png" style="width: 440px" /></div><div style="position: absolute; left: 80px; top: 60px;"><img id="img2" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 500px;" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 3
      tpl2num++;
      tpl2li += '<div style="margin-top: 130px; margin-left: 60px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%902.png" style="width: 280px" /></div><div style="margin-top: 50px"><img id="img3" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 4、5
      tpl2num++;
      tpl2li += '<div style="display: flex; justify-content: flex-start; margin-top: 80px"><div><img id="img4" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 320px" /></div><div style="margin-left: 20px;"><img id="img5" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 320px" /></div><div style="margin-left: 20px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%903.png" style="width: 20px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 6
      tpl2num++;
      tpl2li += '<div style="display: flex; margin-top: 70px; justify-content: flex-end; align-items: flex-end;"><div style="margin-right: 40px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%904.png" style="width: 100px" /></div><div><img id="img6" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 560px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 7
      tpl2num++;
      tpl2li += '<div style="margin-top: 90px"><img id="7" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 8、9
      tpl2num++;
      tpl2li += '<div style="margin-top: 70px;display: flex; justify-content: space-between"><div style="margin-top: 80px; margin-left: 30px;"><img id="8" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 320px" /></div><div style="margin-right: 50px;"><div style="text-align: right;"><img id="9" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 300px;" /></div><div style="margin-top: 60px; text-align: right; margin-right: 50px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%905.png" style="width: 90px;" /></div></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 10
      tpl2num++;
      tpl2li += '<div style="margin-top: 20px;"><div style="position: relative; width: 620px;"><img id="10" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 620px;" /><div style="position: absolute; top: 10px; right: -30px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%906.png" style="width: 80px;" /></div></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 11
      tpl2num++;
      tpl2li += '<div style="margin-top: 70px"><img id="11" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 12、13
      tpl2num++;
      tpl2li += '<div style="position: relative; margin-top: 40px;"><div style="position: absolute; top: 0; right: 0;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%907.png" style="width: 410px;" /></div><div style="position: absolute; top: 60px; left: 60px;"><img id="12" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 420px" /></div><div style="position: absolute; top: 170px; right: 15px;"><img id="13" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 300px; height: 300px; border-radius: 150px;" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 14
      tpl2num++;
      tpl2li += '<div style="margin-top: 80px"><img id="14" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 15
      tpl2num++;
      tpl2li += '<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 80px;"><div style="margin-left: 10px;"><img id="15" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 520px" /></div><div style="margin-right: 60px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%909.png" style="width: 90px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 16、17
      tpl2num++;
      tpl2li += '<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 80px;"><div style="margin-left: 60px; text-align: center"><div><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%9010.png" style="width: 170px" /></div><div style="margin-top: 20px;"><img id="16" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 280px" /></div><div style="margin-top: 10px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%9011.png" style="width: 260px" /></div></div><div style="margin-right: 30px;"><img id="17" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 340px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      tpl2num++;
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 18
      tpl2num++;
      tpl2li += '<div style="margin-top: 50px"><img id="18" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 750px" /></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
      // 19
      tpl2num++;
      tpl2li += '<div style="margin-left: 170px; position: relative; width: 510px;"><div style="display: flex; align-items: center; position: absolute; left: -170px; top: 20px; bottom: 0; width: 170px;"><div style="height: 50%;"><img id="19" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 170px; height: 100%; opacity: 0.5;" /></div></div><div style="margin-top: -20px; text-align: center"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%9012.png" style="width: 150px;" /></div><img id="19" src="http://assets.janggwa.cn/1(' + tpl2num + ').jpg?t=' + new Date() + '" style="width: 510px" /><div style="position: absolute; bottom: 30px; right: -50px;"><img src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF6%E7%B4%A0%E6%9D%9013.png?1" style="width: 160px" /></div></div>';
      if (tpl2num === this.state.fileLength) {
        return tpl2li;
      }
    }
  }
  handleCreateResult = () => {
    let tpl1li = this.handleCircleImage1();
    let tpl2li = this.handleCircleImage2();
    let tpl3li = this.handleCircleImage3();
    let tpl4li = this.handleCircleImage4();
    let tpl5li = this.handleCircleImage5();
    let tpl6li = this.handleCircleImage6();
    const tpl1 = '<div id="image" style="width: 750px; margin: 0 auto; padding-bottom: 150px">' + tpl1li + '</div>';
    const tpl2 = '<div id="image" style="width: 750px; margin: 0 auto; padding-bottom: 150px">' + tpl2li + '</div>';
    const tpl3 = '<div id="image" style="width: 750px; margin: 0 auto; padding-bottom: 150px">' + tpl3li + '</div>';
    const tpl4 = '<div id="image" style="width: 750px; margin: 0 auto; padding-bottom: 150px">' + tpl4li + '</div>';
    const tpl5 = '<div id="image" style="width: 750px; margin: 0 auto; padding-bottom: 150px">' + tpl5li + '</div>';
    const tpl6 = '<div id="image" style="width: 750px; margin: 0 auto; padding-bottom: 150px">' + tpl6li + '</div>';
    let content = '';
    switch (this.state.value) {
      case 1:
        content = tpl1;
        break;
      case 2:
        content = tpl2;
        break;
      case 3:
        content = tpl3;
        break;
      case 4:
        content = tpl4;
      case 5:
        content = tpl5;
      case 6:
        content = tpl6;
        break;
      default:
        break;

    }
    document.querySelector('.result').innerHTML = content;
  }
  handleCreateCode = () => {
    const code  = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerText = code;
  }
  handleCreatePicture = () => {
    var node = document.getElementById('image');
    domtoimage.toJpeg(node, { bgcolor: '#fff'})
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
        message.info('生成图片成功');
        console.log('生成图片成功');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  handleCreateImageEight = () => {
    const eightTpl = '<div id="image" style="width: 800px; height: 800px"><img style="width: 100%; height: 100%" id="img1" src="http://assets.janggwa.cn/1(1).jpg" /></div>'
    document.querySelector('.result').innerHTML = eightTpl;
    document.getElementById('img1').src = `http://assets.janggwa.cn/1(1).jpg?t=${new Date()}`;
  }
  render() {
    return (
      <div className="App">
        <div className="result" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ marginRight: 20 }} onClick={this.handleChooseTemplete}>选择模板</Button>
          <Modal
            className="templete-modal"
            title="请选择需要使用的模板"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>
                <img className={this.state.value === 1 ? 'templete-img actived' : 'templete-img'} src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF1.png" alt="img" />
              </Radio>
              <Radio value={2}>
                <img className={this.state.value === 2 ? 'templete-img actived' : 'templete-img'} src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF1.png" alt="img" />
              </Radio>
              <Radio value={3}>
                <img className={this.state.value === 3 ? 'templete-img actived' : 'templete-img'} src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF1.png" alt="img" />
              </Radio>
              <Radio value={4}>
                <img className={this.state.value === 4 ? 'templete-img actived' : 'templete-img'} src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF1.png" alt="img" />
              </Radio>
              <Radio value={5}>
                <img className={this.state.value === 5 ? 'templete-img actived' : 'templete-img'} src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF1.png" alt="img" />
              </Radio>
              <Radio value={6}>
                <img className={this.state.value === 6 ? 'templete-img actived' : 'templete-img'} src="http://assets.janggwa.cn/%E6%A8%A1%E6%9D%BF1.png" alt="img" />
              </Radio>
            </RadioGroup>
          </Modal>
          <input id="file" type="file" multiple="true" />
          <Button style={{ marginLeft: 20, display: 'inline-block' }} onClick={this.handleCreateResult}>预览</Button>
          <Button style={{ marginLeft: 20, display: 'inline-block' }} onClick={this.handleCreateCode}>生成代码</Button>
          <Button style={{ marginLeft: 20, display: 'inline-block' }} onClick={this.handleCreatePicture}>生成图片</Button>
          <Button style={{ marginLeft: 20, display: 'inline-block' }} onClick={this.handleCreateImageEight}>800图片</Button>
        </div>
      </div>
    );
  }
}

export default App;
