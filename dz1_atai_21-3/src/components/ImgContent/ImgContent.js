import classes from'./ImgContent.module.css'
const Img = (props)=>{
    return <img src={props.src} className={classes.img}/>
}
 export default Img