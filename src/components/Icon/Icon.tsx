import s from './Icon.module.scss';
import React from 'react';


interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string,
  className: string,
}


const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
};
try {
  importAll(require.context('@/share/Icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}


export default function Icon(props: IconProps) {
  const {name, className, ...restProps} = props;
  return (
    <>
      <span className={s.container}>
     <svg className={`${s[props.className]}`}
          {...restProps}
     >
        <use xlinkHref={`#${props.name}`}/>
      </svg>
      </span>
    </>
  );
}
