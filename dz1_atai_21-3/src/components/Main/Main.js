import classes from './Main.module.css';
import Text from "../Text/Text"
import Button from "../Button/Button"
import Img from '../ImgContent/ImgContent';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
const Main = ()=>{
    return (
        <div className={classes.main}>
            <Img src={img1}/>
            <Text title={'React'}/>
            <Img src={img2}/>
            <Text title={'Something'}/>
            <Button title={'Hi'}/>
        </div>
    )
}

export default Main