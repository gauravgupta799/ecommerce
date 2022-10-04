import React, {useState} from "react";
import { sliderItems } from "../Data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Container,Wrapper,Slide,Arrow,
    ImageContainer,InfoContainer,Image,Title,
	Desc,Button,
} from "./SliderStyled";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction ==='left'){
           setSlideIndex( slideIndex > 0 ? slideIndex - 1: 2);
        }else{
          setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }
	return (
		<Container>
			<Arrow direction='left' onClick={()=>handleClick("left")}>
				<ArrowLeftOutlined/>
			</Arrow>
			<Wrapper sIndex = {slideIndex}>
				{sliderItems.map((item) => {
                    const {id,title, img, desc,bg} = item;
					return (
						<>
							<Slide bg={bg} key = {id}>
								<ImageContainer>
									<Image src={img}></Image>
								</ImageContainer>
								<InfoContainer>
									<Title>{title}</Title>
									<Desc>
										{desc}
									</Desc>
									<Button>SHOP NOW</Button>
								</InfoContainer>
							</Slide>
						</>
					);
				})}
			</Wrapper>
			<Arrow direction='right' onClick= {()=>handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
