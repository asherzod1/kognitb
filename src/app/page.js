export const metadata = {
    title: 'КогнитB® Сироп 100 мл — Инструкция по применению',
    description: 'КогнитB® сироп 100 мл — для детей от 2-х лет и взрослых. Содержит экстракт Гинкго билоба, магний, глицин, L-триптофан и витамины группы В. Улучшает память, концентрацию внимания и когнитивные функции.',
    keywords: ['КогнитB сироп', 'Когнит B сироп', 'сироп для памяти', 'гинкго билоба сироп', 'сироп для детей', 'когнитивные функции', 'Spring Pharmaceutic'],
    openGraph: {
        title: 'КогнитB® Сироп 100 мл — Инструкция по применению',
        description: 'Сироп для улучшения памяти и когнитивных функций для детей от 2-х лет и взрослых',
        url: 'https://kognitb.uz',
        images: [
            {
                url: '/kognit1.webp',
                width: 800,
                height: 600,
                alt: 'КогнитB® сироп 100 мл',
            },
        ],
    },
    alternates: {
        canonical: 'https://kognitb.uz',
    },
};

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'КогнитB® Сироп 100 мл',
        image: 'https://kognitb.uz/kognit1.webp',
        description: 'КогнитB® сироп — биологически активная добавка для улучшения памяти, концентрации внимания и когнитивных функций. Для детей от 2-х лет и взрослых.',
        brand: {
            '@type': 'Brand',
            name: 'КогнитB®',
        },
        manufacturer: {
            '@type': 'Organization',
            name: 'Spring Pharmaceutic',
            url: 'https://kognitb.uz',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'UZ',
                addressRegion: 'Наманганская область',
                addressLocality: 'Касансайский район',
                streetAddress: 'Кукимбой, Навбахор МСГ, улица Булак, дом 129',
            },
            telephone: '+998996942363',
        },
        category: 'Биологически активные добавки',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="xl:max-w-[1110px] my-0 mx-auto w-[90%]">
                <div className="h-[80px] flex items-center justify-between">
                    <a href="/">
                        <span className={"text-xl md:text-3xl font-semibold"} style={{ userSelect: "none" }}>
                            КогнитB®
                        </span>
                    </a>
                    <div className="flex items-center gap-4 md:gap-6">
                        <a href="/" className="text-[12px] md:text-[16px] font-medium text-[#0C54A0] border-b-2 border-[#0C54A0]">Сироп</a>
                        <a href="/tablet" className="text-[12px] md:text-[16px] font-medium text-gray-600 hover:text-[#0C54A0]">Таблетки</a>
                        <h3 className="text-[11px] md:text-[18px] font-medium hidden md:block">Tel: +998 99 694 23 63</h3>
                    </div>
                </div>
                <div className="mt-[50px]">
                    <h2 className="font-semibold text-center text-4xl font-roboto">«Когнит B® » сироп 100 мл</h2>
                    <div className="flex justify-center">
                        <img
                            height={600}
                            width={600}
                            className="hidden md:block"
                            src="/kognit1.webp"
                            alt="КогнитB"
                            loading={"lazy"}
                        />
                        <img
                            height={300}
                            width={300}
                            className="block md:hidden"
                            src="/kognit1.webp"
                            alt="КогнитB"
                            loading={"lazy"}
                        />
                        {/*<img*/}
                        {/*    className="h:[50vh] md:h-[60vh]"*/}
                        {/*    src="/Invirep.webp"*/}
                        {/*    alt="invirep, ИНВИРЕП"/>*/}
                    </div>
                    <h3 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
                        ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ
                    </h3>
                    <div className="text-[14px] md:text-[16px] font-roboto font-light">
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]">Когнит</span>®</strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Торговое название: </span> Когнит
                            B®</strong>
                        </div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Лекарственная форма: </span> сироп</strong>
                        </div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]">Состав: </span> 1 мл сиропа для перорального потребления содержит
                            экстракт гинкго билобы - 4 мг/мл, магний
                            (магния цитрат) - 3 мг/мл, глицин - 2,5 мг/мл , триптофан (L - триптофан) - 2,5 мг/мл,
                            витамин В3
                            (никотиновая кислота) - 1,1 мг/мл, В5 (кальция пантотенат) - 0,3 мг/мл , витамин В6
                            (пиридоксина
                            гидрохлорид - 0,09 мг/мл, витамин А (ретинола ацетат) - 36 мкг/мл, витамин В9 (фолиевая
                            кислота) -
                            15,0 мкг/мл ;
                            (1:1). </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Вспомогательные вещества: </span>растворитель
                            вода очищенная, регулятор кислотности лимонная кислота,
                            загуститель ксантановая камедь (Е 415), консервант калия сорбат (Е 202), консервант натрия
                            бензоат (Е
                            211), подсластитель сукралоза (Е 955), ароматизатор груши.</strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]">Описание: </span>Коричневая жидкость со вкусом груши</strong>
                        </div>

                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Общие свойства: </span>
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]"></span> Гинкго билоба улучшает мозговое кровообращение и транспорт
                            кислорода, глюкозы в головной мозг.
                            Активные компоненты способствуют синтезу молекул АТФ. Гинкго билоба снижает риск развития
                            сосудистой деменции у пожилых пациентов, а также помогает при потере слуха, уменьшает шум в
                            ушах
                            и головокружение, применяется при синдроме нарушения вестибулярного аппарата. Уменьшает
                            проницаемость капилляров, регулирует микроциркуляцию в периферических сосудах, улучшает
                            реологические свойства крови и уменьшает вязкость. </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]"><i>Магний </i> </span> - это природный стабилизатор нервной
                            системы и является одним из основных минеральных
                            элементов организма, участвует в обмене белков, углеводов, липидов и нуклеиновых кислот, в
                            расщеплении глюкозы, выведении токсинов, усвоении витаминов. Играет немаловажную роль в
                            образовании нейромедиаторов и передаче нервных импульсов. </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]"><i>L-триптофан </i> </span> - незаменимая аминокислота, которая
                            не синтезируется в организме, является
                            предшественником серотонина, оказывает антидепрессивное действие, способствует снятию
                            тревожного состояния, гиперактивности, навязчевого состояния, обеспечивает нормальный сон.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]"><i>Глицин </i> </span> - нормализует и активирует процессы
                            торможения в ЦНС, уменьшает психоэмоциональное
                            напряжение, повышает умственную работоспособность. Заменяемая аминокислота (естественный
                            метаболит), оказывает нейропротекторное, антистрессовое, седативное действие, улучшает
                            метаболические процессы в тканях мозга, нормализует сон.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]"><i>Витамины группы В </i> </span> - оказывают нейротропное
                            действие, оказывают благоприятное действие при
                            воспалительных и дегенеративных заболеваниях нервов и двигательного аппарата. Наряду с
                            участием
                            в регуляции углеводного, белкового и липидного обмена в клетке, регулирующих проведение
                            нервного импульса, являются кофакторами многих ферментов, действующих в клетках нервной
                            ткани;
                            участвуют в декарбоксилировании, в дез- и переаминировании аминокислот, в синтезе
                            нейромедиаторов (дофамин, норадреналин, адреналин, гистамин, ГАМК).
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]"><i>Витамин А </i> </span> - жирорастворимый витамин, выполняющий множество биохимически важных функций в
                            организме человека. Ретинол является необходимым компонентом для нормальной функции сетчатки
                            глаза: он связывается с опсином (красным пигментом сетчатки), образовывая зрительный пурпур —
                            родопсин, необходимый для зрительной адаптации во тьме.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Рекомендации по применению: </span>
                            <br />
                            Сироп Когнит В® может быть рекомендован детям от 2-х лет и взрослым, как дополнительный источник
                            L-триптофана, глицина, магния, экстракта гинкго билоба и витаминов А, В3, В5, В6, В9, с целью
                            улучшения адаптации детей и взрослых к эмоциональным, умственным и физическим нагрузкам.
                            Рекомендуется употреблять при проявлениях дисфункций нервной системы (тревожность,
                            эмоциональная нестабильность, нарушение сна), для улучшения памяти, процесса мышления,
                            концентрации внимания для взрослых и детей.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Способ применения </span>
                            <br /> Рекомендуется потреблять в дневное время суток. Непосредственно во время еды или после еды.
                            Перед употреблением флакон с сиропом тщательно встряхнуть!
                            <br />
                            <img src="/imgc.png" alt="" />
                            <br />
                            Перед употреблением рекомендуется консультация врача. Продолжительность потребления сироп
                            Когнит В® определяется индивидуально. Рекомендуемый срок потребления составляет до 3-х курсов в
                            год по 1-2 месяца с перерывами в 1 месяц. В дальнейшем срок потребления рекомендуется врачом.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Особые указания  </span>
                            <br />
                            Сироп Когнит В® является биологически активной добавкой! Посоветуйтесь с специалистом перед
                            применением. После первого открытия флакона хранить его плотно закрытым не более 30 дней.
                            Не применять после окончания срока годности, указанного на упаковке.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Предостережение </span>
                            <ul>
                                <li>- Не использовать при индивидуальной непереносимости к ингредиентам, входящим в состав сиропа.</li>
                                <li>- Не превышать суточное рекомендуемое количество потребления.</li>
                                <li>- Не принимать после окончательной даты потребление указанной на упаковке.</li>
                                <li>- Не следует использовать в качестве замены полноценного рациона питания.</li>
                                <li>- Беременным и женщинам в период кормления грудью перед потреблением обязательна
                                    консультация врача.</li>
                            </ul>
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]">Условия хранения </span>
                            <br />
                            Хранить в оригинальной упаковке при температуре не выше 25 °С. Не замораживать! Допустимо
                            образование гелеобразной структуры, которая разрушается при встряхивании. Хранить в недоступном
                            для детей месте. Не замораживать!
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Форма выпуска </span>
                            <br />
                            Картонная пачка содержит 1 флакон из темного светозащитного флакона емкостью 100 мл (ml),
                            закупоренный пластиковой крышкой с контролем первого открытия; дозирующую емкость. 1 флакон
                            вместе с инструкцией по применению в картонной пачке.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Срок годности  </span>
                            <br />
                            2 года.
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span
                            className="text-[#0C54A0]">Производитель  </span>
                            <br />
                            ООО "SPRING PHARMACEUTIC" CП Великобритания
                        </strong></div>
                        <div className="mb-4"><strong className="font-medium"><span className="text-[#0C54A0]">Местонахождение производителя и адрес места осуществления деятельности.   </span>
                            <br />
                            Республика
                            Узбекистан , Наманганская область, Касансайский район, Кукимбой, Навбахор МСГ, улица Булак, дом
                            129.
                            Тел. : +998996942363
                        </strong></div>

                        <a href="https://www.instagram.com/springpharmaceutic/" className="flex gap-3 items-center">
                            <img src="/Instagram-Logo.wine.svg" loading={"lazy"} className="w-[30px] h-[30px]"
                                alt="instagram" />
                            @springpharmaceutic
                        </a>
                        <a href="https://www.facebook.com/spring.pharm.3/" className="flex gap-3 items-center">
                            <img src="/Facebook-f_Logo-Blue-Logo.wine.svg" loading={"lazy"}
                                className="w-[30px] h-[30px]" alt="instagram" />
                            Spring Pharm
                        </a>
                        <a href="https://t.me/SpringPharmaceutic" className="flex gap-3 items-center">
                            <img src="/telegram.webp" width={20} height={20} loading={"lazy"}
                                className="w-[20px] h-[20px] ml-1" alt="instagram" />
                            Spring_Pharmaceutic
                        </a>
                        <a href="#" className="flex gap-3 items-center mb-3">
                            <img src="/email-svgrepo-com.svg" loading={"lazy"} className="w-[25px] h-[25px]"
                                alt="instagram" />
                            spring_pharmaceutic@gmail.com
                        </a>
                        <div className="mb-5 flex gap-3 flex flex-wrap">
                            <a href="/Kognit%20B%20instruksiya.pdf"
                                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]">
                                СКАЧАТЬ ИНСТРУКЦИЮ
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
                                    fill="white">
                                    <g id="Interface / Download">
                                        <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="white"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
