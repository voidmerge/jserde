import {
  DeserializerJson,
  SerializerJson,
  jsToStream,
  streamToJs,
  streamToString,
} from './index.js';

describe('suite', () => {
  it('ser sanity', () => {});

  it('de sanity', async () => {});

  it('stream', async () => {
    const res = new ReadableStream({
      start(controller) {
        for (const chunk of [
          { t: '[' },
          { t: 'f64', v: 3.141 },
          { t: 'null' },
          { t: '[' },
          { t: ']' },
          { t: ']' },
        ]) {
          controller.enqueue(chunk);
        }
        controller.close();
      },
    }).pipeThrough(new SerializerJson().transformStream());

    console.log('GOT', await streamToString(res));

    const encoder = new TextEncoder();

    console.log(
      '2',
      await streamToJs(
        new ReadableStream({
          start(controller) {
            for (const chunk of ['[ 3', '.141, nu', 'll, [', ']]']) {
              controller.enqueue(encoder.encode(chunk));
            }
            controller.close();
          },
        })
          .pipeThrough(new TextDecoderStream())
          .pipeThrough(new DeserializerJson().transformStream()),
      ),
    );

    console.log('3', await streamToJs(jsToStream([3.141, null, []])));
  });
});
