import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import { View } from 'react-native';

const handleCanvas = (c: any) => {
  if (!c) return;  
  const ctx = c.getContext('2d');
    c.height = Dimensions.get('screen').height;
    c.width = Dimensions.get('screen').width;
    let matrix:string = "▲△△△▼▼▷◁???◭◮◭◭◭!!!▲△△△▼▼▷◁???◭◮◭◭◭!!!BOHEMIANGROVE";
    let font_size = 22;
    let columns = c.width / font_size;
    let drops:number[] = [];
    for (let x = 0; x < columns; x++)
      drops[x] = 1;

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "plum";
      ctx.font = font_size + "px Bad Script";

      for (let i = 0; i < drops.length; i++) {

        let text = matrix[Math.floor(Math.random() * matrix.length)];

        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
    }
    setInterval(draw, 100);
}

  export default handleCanvas