/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import PropTypes from 'prop-types';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import HTML from '../../components/I18N/HTML';

/**
 * Description of MapStore rendered in the home page.
 * Renders the HTML in localization files identified by
 * the path `home.shortDescription`.
 * @name HomeDescription
 * @class
 * @memberof plugins
 * @prop {string} [name='MapStore'] Title of the text
 */
class HomeDescription extends React.Component {
	static propTypes = {
		style: PropTypes.object,
		className: PropTypes.string,
		name: PropTypes.string
	};

	static defaultProps = {
		name: 'MapStore',
		className: 'ms-home-description',
		style: {}
	};

	render() {
		return (
			<div role="navigation" aria-label="Toolbar">
				<link data-chunk="client" rel="stylesheet" href="product/assets/ispra/10.chunk.css" />
				<link data-chunk="client" rel="stylesheet" href="product/assets/ispra/client.chunk.css"/>
				<div className="public-ui">
					<div className="it-header-wrapper">
						<div className="it-header-slim-wrapper">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="it-header-slim-wrapper-content" />
									</div>
								</div>
							</div>
						</div>
						<div className="it-nav-wrapper">
							<div className="it-header-center-wrapper">
								<div className="container">
									<div className="row">
										<div className="col-12">
											<div className="it-header-center-content-wrapper">
												<div className="it-brand-wrapper">
													<a href="https://nnb.isprambiente.endor.redturtle.it/">
														<img src="product/assets/ispra/logo.png" alt="" className="icon" />
													</a>
												</div>
												<div className="it-right-zone">
													<div className="loghi d-none d-md-block">
														<a href="https://www.isprambiente.gov.it/" title="ISPRA" target="_blank" rel="noopener noreferrer">
															<img src="product/assets/ispra/ispra.png" alt="" className="icon" />
														</a>
														<a href="https://www.isprambiente.gov.it/" title="Sistema Nazionale per la Protezione dell&#39;Ambiente" target="_blank" rel="noopener noreferrer">
															<img src="product/assets/ispra/snpa.png" alt="" className="icon" />
														</a>
														<a href="https://www.minambiente.it/" title="Ministero per la transizione ecologica" target="_blank" rel="noopener noreferrer">
															<img src="product/assets/ispra/ministero.png" alt="" className="icon" />
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default {
	HomeDescriptionPlugin: HomeDescription
};
