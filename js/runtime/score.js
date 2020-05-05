//分数
import {DataBus} from '../databus.js';
let databus = new DataBus();

//定义分数
export class Score{
  constructor(){
    this.scoreNumber = 0;
    this.isScore = true;
  }
  //绘制分数
  render(){
    databus.ctx.font = "30px 华文彩云";
    databus.ctx.fillStyle = "#fff";
    databus.ctx.fillText("count:"+ this.scoreNumber,0,100,200);
    
  }
}