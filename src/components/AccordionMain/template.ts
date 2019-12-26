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
				<h2>Bachelor of Science OnlineMedien</h2>
				<p>09/2018 - Heute</p>
				<p>Hochschule für Digitale Medien in Furtwangen</p>
			</div>
			<div class="accordion__item">
				<h2>Praxissemester</h2>
				<p>09/2019 - 02/2020</p>
				<p>Virtual Identity AG - Freibrug</p>
			</div>
			<div class="accordion__item">
				<h2>Ausbildung zum Industriekaufmann</h2>
				<p>09/2015 - 06/2018</p>
				<p>Beton Kemmler GmbH - Hirschau</p>
			</div>
			<div class="accordion__item">
				<h2>Bundesfreiwilligendienst</h2>
				<p>09/2014 - 08/2015</p>
				<p>Klinik für Urologie - Tübingen, Verwaltung</p>
			</div>
			<div class="accordion__item">
				<h2>Allgemeine Hochschulreife</h2>
				<p>2006 - 2014</p>
				<p>Eugen-Bolz-Gymnasium - Rottenburg</p>
			</div>
		</section>
    `;
};
