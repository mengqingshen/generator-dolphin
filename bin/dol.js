#!/usr/bin/env node

/**
 * @file where your common css is imported. <$= appCreateDate $>
 * @author <$= appAuthorName $>, <$= appAuthorEmail $>
 */

const yeoman = require('yeoman-environment')

const env = yeoman.createEnv()
env.register(require.resolve('generator-dolphin'), 'dolphin:app')

console.log('argv', process.argv)
env.run('dolphin:app', () => {})