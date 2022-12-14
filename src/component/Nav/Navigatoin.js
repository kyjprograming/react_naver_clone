import './Navigation.css'

const Navigation = () => {
    return(
        <div id="nav">
            <ul className="menu">
                <li className='left_box'><a href='https://mail.naver.com/v2/folders/0/all'><img className='mail_icon' src={require('../../image/mail_icon.png')}/>메일</a></li>
                <li className='left_box'><a href='#'>카페</a></li>
                <li className='left_box'><a href='#'>블로</a>그</li>
                <li className='left_box'><a href='#'>지식iN</a></li>
                <li className='left_box'><a href='#'>쇼핑</a></li>
                <li className='left_box'><a href='#'><img className='shopping_live_icon'src={require('../../image/shopping_live_icon_2.png')}/></a></li>
                <li className='left_box'><a href='#'>Pay</a></li>
                <li className='left_box'><a href='#'>TV</a></li>
            </ul>
            <ul className='menu'>
                <li className='right_box'><a href='#'>사전</a></li>
                <li className='right_box'><a href='#'>뉴스</a></li>
                <li className='right_box'><a href='#'>증권</a></li>
                <li className='right_box'><a href='#'>부동산</a></li>
                <li className='right_box'><a href='#'>지도</a></li>
                <li className='right_box'><a href='#'>VIBE</a></li>
                <li className='right_box'><a href='#'>도서</a></li>
                <li className='right_box'><a href='#'>웹툰</a></li>
            </ul>
        </div>
    )
}
export default Navigation;