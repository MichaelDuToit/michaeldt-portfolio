import { useState } from "react";

export default function Carousel({ images })
{

    const [ modalVisible, setModalVisbility] = useState(false);
    const [ modalImageIndex, setModalImageIndex ] = useState(0);
    const [ selectedModalImage, setSelectedModalImage ] = useState("");

    const imgArray = images.map((img, index) => ({
        index: index,
        url: img
    }));

    const hideArrows = (imgArray.length == 1);

    function changeSlide(direction)
    {
        let nextImageIndex = modalImageIndex - direction;
        const maxImageIndex = imgArray.length - 1;

        if(nextImageIndex < 0)
        {
            nextImageIndex = maxImageIndex;
        }
        else if (nextImageIndex > maxImageIndex)
        {
            nextImageIndex = 0
        }

        setImage(nextImageIndex);     
    }
    
    function setImage(imgIndex)
    {
        setModalImageIndex(imgIndex);
        setSelectedModalImage(`/images/${imgArray[imgIndex].url}`);
        setModalVisbility(true);
    }

    function closeModal()
    {
        setModalVisbility(false);
    }

    return (
        <div className="carousel">
            <div className="display">
                {
                    imgArray.map(i => (
                        <img key={i.index} src={`/images/${i.url}`} onClick={() => setImage(i.index)}/>
                    ))
                }
            </div>
            <div className={`modal ${modalVisible ? "modalVisible" : "" }`}>
                <div className="modalContent">
                    <a className="modalClose" onClick={() => closeModal()}>X</a>
                    <a className={`modalPrev ${hideArrows ? "btnHidden" : ""}`} onClick={() => changeSlide(-1)}>&#10094;</a>
                    <img src={selectedModalImage} />
                    <a className={`modalNext ${hideArrows ? "btnHidden" : ""}`} onClick={() => changeSlide(1)}>&#10095;</a>
                </div>
            </div>
        </div>
    )
}

