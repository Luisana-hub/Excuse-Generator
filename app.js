function onLoad() {
    const excuseGenerator = "My dog eat my homework";
    return excuseGenerator;
}
console.log(onLoad());

document.getElementById("excuse").innerHTML = onLoad();