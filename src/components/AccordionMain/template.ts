import * as styles from "./styles.scss";

import {
	AccordionMainProps,
	AccordionMainState,
	AccordionMainMethods
} from "./defines";

export default (
	render: Function,
	data: AccordionMainProps & AccordionMainState & AccordionMainMethods,
	createStyle: Function
) => {
	return render`
        ${createStyle(styles)}
		<section class="accordion">
			<div class="accordion__item expand">
				<p class="accordion__date">09/2018 - Heute</p>
				<h3 class="accordion__heading">Bachelor of Science OnlineMedien</h3>
				<p>Hochschule für Digitale Medien in Furtwangen</p>
			</div>
			<div class="accordion__item">
				<p class="accordion__date">09/2019 - 02/2020</p>
				<h3 class="accordion__heading">Praxissemester</h3>
				<p>Virtual Identity AG - Freibrug</p>
			</div>
			<div class="accordion__item">
				<p class="accordion__date">09/2015 - 06/2018</p>
				<h3 class="accordion__heading">Ausbildung zum Industriekaufmann</h3>
				<p>Beton Kemmler GmbH - Hirschau</p>
			</div>
			<div class="accordion__item">
				<p class="accordion__date">09/2014 - 08/2015</p>
				<h3 class="accordion__heading">Bundesfreiwilligendienst</h3>
				<p>Klinik für Urologie - Tübingen, Verwaltung</p>
			</div>
			<div class="accordion__item">
				<p class="accordion__date"> 2006 - 2014</p>
				<h3 class="accordion__heading">Allgemeine Hochschulreife</h3>
				<p>Eugen-Bolz-Gymnasium - Rottenburg</p>
			</div>
		</section>
    `;
};
