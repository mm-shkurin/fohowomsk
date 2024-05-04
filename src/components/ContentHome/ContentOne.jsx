import './ContentOne.css'
import video from './../../img/video.mp4';
function ContentOne() {
    return (
        <section className='ContentOne'>
            <div className="container">
                <div className="content">
                    <div className="content_txt">
                        <h1>FOHOW</h1>
                        <p>Доброго времени суток, дорогой друг!
                            Вы заинтересованы в восстановлении
                            или поддержании вашего здоровья,
                            а может Вас интересуют возможности
                            развития в новом деле? Значит, Вы здесь
                            оказались неслучайно. Вы находитесь
                            на сайте официального представительства
                            корпорации Fohow RUE17 в городе Омске. </p>
                    </div>
                    <div className="content_video">
                        <video className='video' src={video} controls>.
                            Ваш браузер не поддерживает тег <code>video</code>.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentOne;