import { View, Viewable, Inject } from 'conbo';

import MyModel from '../model/MyModel';

@Viewable('OutputView')
export default class OutputView extends View
{
	@Inject public myModel:MyModel;

	protected declarations()
	{
		this.tagName = 'h1';
		this.template = `Hello, {{myModel.name|parseName}}!`;
	}

	public parseName(name:string):string
	{
		return name || 'Stranger';
	}
}
