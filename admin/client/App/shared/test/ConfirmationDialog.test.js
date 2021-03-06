import React from 'react';
import { shallow } from 'enzyme';
import demand from 'must';
import ConfirmationDialog from '../ConfirmationDialog';
import { Modal, ModalBody, ModalFooter, Button } from 'elemental';

describe('<ConfirmationDialog />', () => {
	it('should render a Modal with a body and a footer', () => {
		const component = shallow(<ConfirmationDialog />);
		demand(component.find(Modal).length).equal(1);
		demand(component.find(ModalBody).length).equal(1);
		demand(component.find(ModalFooter).length).equal(1);
	});

	it('should render some passed HTML', () => {
		const HTML = '<h1>Some <code>HTML</code> here!</h1>';
		const component = shallow(
			<ConfirmationDialog
				body={HTML}
			/>
		);

		demand(component.find('div').prop('dangerouslySetInnerHTML')).eql({
			__html: HTML,
		});
	});

	describe('buttons', () => {
		it('should render two buttons', () => {
			const component = shallow(<ConfirmationDialog />);
			demand(component.find(Button).length).equal(2);
		});

		it('should render a button with a confirmation label', () => {
			const confirmationLabel = 'Confirm';
			const component = shallow(
				<ConfirmationDialog
					confirmationLabel={confirmationLabel}
				/>
			);

			demand(component.find(Button).at(0).contains(confirmationLabel)).true();
		});

		it('should render a button with a cancel label', () => {
			const cancelLabel = 'Confirm';
			const component = shallow(
				<ConfirmationDialog
					cancelLabel={cancelLabel}
				/>
			);

			demand(component.find(Button).at(1).contains(cancelLabel)).true();
		});
	});
});
