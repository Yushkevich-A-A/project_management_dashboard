import DrawWidgetState from "./DrawWidgetState/DrawWidgetState";
import DrawWidgetTasks from "./DrawWidgetTasks/DrawWidgetTasks";
import DrawWidgetWrapper from "./DrawWidgetWrapper/DrawWidgetWrapper";
import db from './DB/DB';
import WidgetController from "./WidgetController/WidgetController";

const widgetWrapper = new DrawWidgetWrapper();
const stateWidget = new DrawWidgetState(widgetWrapper.wrapperWidget, db);
const tasksWidget = new DrawWidgetTasks(widgetWrapper.wrapperWidget, db);
const wdigetController = new WidgetController(stateWidget, tasksWidget, db)
