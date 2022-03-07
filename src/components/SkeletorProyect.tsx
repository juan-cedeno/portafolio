import ContentLoader , {IContentLoaderProps} from 'react-content-loader';


export const SkeletorProyect = (props: IContentLoaderProps) => {
    return (
    <ContentLoader 
        speed={2}
        width={1000}
        height={1000}
        viewBox="0 0 1000 1000"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
  >
        <rect x="7" y="27" rx="0" ry="0" width="670" height="186" />
  </ContentLoader>
    )
}
