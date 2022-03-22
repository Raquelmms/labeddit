import ImgError from "../../assets/error404.webp"
import {ContainerBody , ImgE } from "./styled"

const ErrorPage = () => {
    return(
        <ContainerBody>
            <ImgE src={ImgError} alt="ilustração de erro 404"/>
        </ContainerBody>
    )
}

export default ErrorPage