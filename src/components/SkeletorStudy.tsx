import ContentLoader, {IContentLoaderProps} from "react-content-loader"


export const SkeletorStudy = (props: IContentLoaderProps) => {
    return (
        <ContentLoader 
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
  >
        <rect x="72" y="281" rx="0" ry="0" width="18" height="16" /> 
        <rect x="102" y="286" rx="0" ry="0" width="225" height="15" /> 
        <rect x="109" y="306" rx="0" ry="0" width="143" height="13" />
  </ContentLoader>
    )
}
