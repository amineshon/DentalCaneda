import { animated, config, useSpring } from 'react-spring';
import Image from 'next/image';
import styled from '@emotion/styled';


interface SliderImageProps {
  src: string;
  alt: string;
  priority: boolean;
  showImage: boolean;
}

const SliderImage = ({ src, alt, priority, showImage }: SliderImageProps) => {
  const spring = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: showImage ? 1 : 0,
    },
    config: config.molasses,
  });
  return (
    <Amin style={spring}>
      <Image src={src} alt={alt} layout="fill" priority={priority} />
    </Amin>
  );
};
const Amin = styled(animated.div)`
span{

  height:70vh !important;
}

}
`;


export default SliderImage;
