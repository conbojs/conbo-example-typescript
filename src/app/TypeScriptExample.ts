import './TypeScriptExample.scss';

import { Application, Viewable } from 'conbo';

import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

@Viewable('TypeScriptExample')
export default class TypeScriptExample extends Application
{
	protected declarations():void
	{
		this.contextClass = MyContext;
	}

	protected initialize():void
	{
		console.info('Hello from ConboJS using TypeScript, SASS & Webpack!');

		this.appendView
		(
			new OutputView(this.context),
			new InputView(this.context)
		);
	}

}
