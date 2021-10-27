import {Link} from "react-router-dom"

const saytlar = [
    {
        id: 1, 
        title: "wikipedia.org", 
        text: "Turli xil ma'lumotlarni ko'rish mumkin bo'lgan sayt",
        uri: "https://uz.wikipedia.org/wiki/Vikipediya"
    },
    {
        id: 2, 
        title: "uzedu.uz", 
        text: "Xalq ta'limi vzairligining rasmiy veb sayti",
        uri: "https://www.uzedu.uz/oz"
    },
    {
        id: 3, 
        title: "youtube.com", 
        text: "onlayn tarzda o'rganish mumkin bo'lgan sayt",
        uri: "https://www.youtube.com/"
    },
    {
        id: 4, 
        title: "matn.uz", 
        text: "matnlarni lotindan kirillga va aksinchaga o'giradigan sayt",
        uri: "https://matn.uz"
    },
    {
        id: 5, 
        title: "referat.uz", 
        text: "mustaqil ishlar topishingiz mumkin bo'lgan sayt",
        uri: "https://referat.uz"
    },
    {
        id: 6, 
        title: "arxiv.uz", 
        text: "mustaqil ishlar topishingiz mumkin bo'lgan yana bir qulay sayt",
        uri: "https://arxiv.uz/"
    },
    {
        id: 7, 
        title: "ziyonet.uz ", 
        text: "ta'lim sayti",
        uri: "http://ziyonet.uz/"
    },
]

function Addweb() {
    return (
        <div className="mt-4">
            <p style={{fontSize: "22px"}}>
                <svg style={{color: "blue"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                </svg>
                <span className="pl-2">Maktab o'quvchilari uchun kerakli web - saytlar</span>
            </p>
           {
               saytlar.map(item => {
                   return (
                       <p key={item.id}>
                           <Link to={item.uri} target="_blank" className="text-decoration-none">
                               <span className="text-danger">{item.title}</span> -
                               <span className="text-dark">{item.text}</span>
                           </Link>
                       </p>
                   )
               })
           }
        </div>
    )
}

export default Addweb