import {motion, useCycle} from 'framer-motion'

const loaderVariant={
    animationOne:{
        x:[-20, 20],
        y:[0, -30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:.5
            },
            y:{
                yoyo:Infinity,
                duration:.25,
                ease:'easeOut'
            },
        },
        animationTwo:{
            x:0,
            y:[0,-40],
            transition:{
                y:{
                    yoyo:Infinity,
                    duration:.25,
                    ease:'easeOut'
                },
        }
    }
    }
}

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne","animationTwo")
    return (
        <>
        <motion.div
        variants={loaderVariant}
        animate={animation}
        className='w-[10px] h-[10px] my-[40px] mx-auto bg-white rounded-[50%]'
        >
        </motion.div>
        <button onClick={()=>cycleAnimation()}>Change the loader</button>
        </>
    );
};

export default Loader;