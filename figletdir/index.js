
import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("junaid");
  console.log(text);
}

doStuff();