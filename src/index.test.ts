import { types, stream, json } from './index.js';

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
    }).pipeThrough(new json.SerializerJson().transformStreamStr());

    console.log('GOT', await stream.streamToString(res));

    const encoder = new TextEncoder();

    console.log(
      '2',
      await stream.streamToJs(
        new ReadableStream({
          start(controller) {
            for (const chunk of ['[ 3', '.141, nu', 'll, [', ']]']) {
              controller.enqueue(encoder.encode(chunk));
            }
            controller.close();
          },
        }).pipeThrough(new json.DeserializerJson().transformStreamBin()),
      ),
    );

    console.log(
      '3',
      await stream.streamToJs(stream.jsToStream([3.141, null, []])),
    );
  });
});
