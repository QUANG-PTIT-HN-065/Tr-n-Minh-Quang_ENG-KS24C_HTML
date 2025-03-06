for (let i = 0; i < 10; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    console.log(`%c Màu ngẫu nhiên: ${color}`, `color: ${color}; font-size: 16px; font-weight: bold`);
}
