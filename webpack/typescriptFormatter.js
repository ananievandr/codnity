/* eslint-disable */
const codeFrame = require('@babel/code-frame').codeFrameColumns;
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const getKeyLink = key => {
  const url = /^-{0,1}\d+$/.test(key) ? 'https://google.com/#q=TS' : 'https://palantir.github.io/tslint/rules/';
  return chalk.gray.underline(url + encodeURIComponent(key));
};

module.exports = message => {
  let output = `${chalk.reset('\n')}`;

  const hasGetters = typeof message.getFile === 'function'; // eslint-disable-line

  let source;
  if (hasGetters) {
    source = message.getFile() && fs.existsSync(message.getFile()) && fs.readFileSync(message.getFile(), 'utf-8');
  } else {
    source = message.file && fs.existsSync(message.file) && fs.readFileSync(message.file, 'utf-8');
  }

  let messageType;
  if (message.isErrorSeverity()) {
    messageType = chalk.red('✘');
  } else {
    messageType = chalk.yellow('⚠');
  }

  const line = message.line || 0;
  const column = message.character || 0;
  const filePath = path.relative('.', hasGetters ? message.getFile() : message.file);
  const filename = `${filePath}:${line}:${column}`;
  const content = hasGetters ? message.getContent() : message.content;

  function renderTitle() {
    return `  ${getKeyLink(message.code)}`;
  }

  function renderDescription() {
    return `\n  ${messageType}  ${chalk.gray(/^-{0,1}\d+$/.test(message.code) ? '[ts]' : '[tslint]')} ${content.replace(
      /\.$/,
      '',
    )}${renderTitle()}\n`;
  }

  function renderFileLink() {
    return `     ${chalk.gray.underline(filename)}`;
  }

  function renderSourceCode() {
    return codeFrame(
      source,
      { start: { line, column } },
      {
        highlightCode: true,
      },
    )
      .split('\n')
      .map(l => `   ${l}`)
      .join('\n');
  }

  function createLine(arr) {
    return arr.filter(l => !!(l || '').trim()).join('\n');
  }

  output += `${createLine([renderDescription(), renderFileLink(), renderSourceCode()])}\n`;

  return output;
};
