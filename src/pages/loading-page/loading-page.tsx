import Lottie from "react-lottie";

// import
import "./loading-page.scss";
import dotLoading from "../../lotties/loading.json";

export default function LoadingPage(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: dotLoading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className={"full-page"}>
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                />
        </div>
    )
}