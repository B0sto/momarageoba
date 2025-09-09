import FooterText from '@/components/Atoms/FooterText/FooterText'
import FooterTitle from '@/components/Atoms/FooterTitle/FooterTitle'

interface footerNavBlockProps {
    title: string;
    items: string[];
}

const FooterNavBlock = ({title, items}: footerNavBlockProps) => {
  return (
    <div>
        <FooterTitle title={title}/>

        <ul className='flex flex-col gap-y-3.5'>
            {items.map((item, index) => (
                <FooterText key={index} text={item}/>
            ))}
        </ul>
    </div>
  )
}

export default FooterNavBlock