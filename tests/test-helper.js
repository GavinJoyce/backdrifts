import Application from 'backdrifs/app';
import config from 'backdrifs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
