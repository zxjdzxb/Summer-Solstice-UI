import s from './Icon.module.scss';


interface IconProps {
  name: string;
}


const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
}
try {
  importAll(require.context('@/share/Icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}


export default function Icon(props: IconProps) {
  return (
    <>
      <span className={s.container}>
      <svg className={s.Icon}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
      </span>
    </>
  );
}
