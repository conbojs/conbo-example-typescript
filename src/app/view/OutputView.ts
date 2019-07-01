import { Inject, View, Viewable } from 'conbo';
import MyModel from '../model/MyModel';
import template from './OutputView.html';

@Viewable('OutputView')
export default class OutputView extends View
{
	@Inject public myModel:MyModel;

	protected declarations()
	{
		this.tagName = 'h1';
		this.template = template;
	}

	public parseName(name:string):string
	{
		return name || 'Stranger';
	}
}
