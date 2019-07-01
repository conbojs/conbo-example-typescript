import { Inject, View, Viewable } from 'conbo';
import MyModel from '../model/MyModel';
import template from './InputView.html';

@Viewable('InputView')
export default class InputView extends View
{
	@Inject public myModel:MyModel;

	protected declarations()
	{
		this.tagName = 'p';
		this.template = template;
	}
}
