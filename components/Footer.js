import Link from 'next/link'
import PhoneNumber from './PhoneNumber.js'

const Footer = () => {

	const Column = ({ title, ulClass, children }) => {
		return (
			<div class="col-4 col-12-medium">
				<section>
					<header>
						<h2>{title}</h2>
					</header>
					<ul class={ulClass}>
						{children}
					</ul>
				</section>
			</div>
		)
	}

	const Columns = ({ children }) => {
		return (
			<div class="row">
				<Column title="Разделы" ulClass="divided">
					<Link href="/timetable">
						<li><a href="/timetable">Расписание</a></li>
					</Link>
					<Link href="/prices">
						<li><a href="/prices">Стоимость</a></li>
					</Link>
					<Link href="/perfomances">
						<li><a href="/perfomances">Спектакли</a></li>
					</Link>
				</Column>
				<Column title="Социальные сети" ulClass="social">
					<li><a class="icon fa-facebook" href="https://www.facebook.com/theatreglazalmaz/"><span class="label">Facebook</span></a></li>
					<li><a class="icon fa-vk" href="https://vk.com/theatreglazalmaz"><span class="label">ВКонтакте</span></a></li>
					<li><a class="icon fa-instagram" href="https://www.instagram.com/theatreglazalmaz/"><span class="label">Instagram</span></a></li>
				</Column>
				<Column title="Контакты" ulClass="contact">
					<li>
						<h3>Адрес</h3>
						<p><a href="https://yandex.ru/maps/-/CBUz6Ds4PB">Измайловский бульвар, 2/26</a></p>
					</li>
					<li>
						<h3>Почта</h3>
						<p>nzkoz@yandex.ru</p>
					</li>
					<li>
						<h3>Телефон</h3>
						<p><PhoneNumber/></p>
					</li>
				</Column>
				{children}
			</div>
		)
	}


	return (
		<section id="footer">
			<div class="container">
				<Columns>

					<div class="col-12">

						<div id="copyright">
							<ul class="links">
								<li>&copy; ГлазАлмаз. All rights reserved.</li><li>Design: <a href="https://vk.com/wanni">Magnarius</a></li>
							</ul>
						</div>

					</div>
				</Columns>
			</div>
		</section>
	)
}

export default Footer