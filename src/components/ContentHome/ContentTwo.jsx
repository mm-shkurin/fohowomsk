import './ContentTwo.css'
import photo_second from './../../img/image 9.png';

function ContentTwo() {
    return (
        <section className='ContentTwo'>
            <div className="container">
                <div className="content2">
                    <div className="content_txt2">
                        <h1>FOHOW.OMSK</h1>
                        <p>Представительство открылось 1 марта 2018 года при поддержке<br />
                            и всесторонней помощи Екатеринбургского филиала и нашего<br />
                            наставника, Амбассадора корпорации Галины Тюриной. За<br />
                            это время наша команда пополнилась новыми, активными,<br />
                            амбициозными партнерами. Многие из них успешно продвигаются<br />
                            по карьерной лестнице  Fohow и развивают свой бизнес<br />
                            в разных регионах. Количество благодарных потребителей,<br />
                            получающих замечательные результаты по применению<br />
                            продукции Fohow, с каждым днем растет, что, несомненно,<br />
                            радует. Все это говорит об огромном доверии к компании.</p>
                    </div>
                    <img src={photo_second} className="photo_second" alt="maphoto_second" />
                </div>
            </div>
        </section>
    )
}

export default ContentTwo;