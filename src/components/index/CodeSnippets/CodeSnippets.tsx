import { useEffect } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import prism from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-php';

import 'prismjs/themes/prism-tomorrow.css';

const CodeSnippets = () => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        display={{ base: 'none', md: 'block' }}
        mt={20}
        mb={15}
        align="center"
      >
        <TabList mb={5}>
          <Tab>Crontab/Bash</Tab>
          <Tab>Python</Tab>
          <Tab>Javascript</Tab>
          <Tab>Go</Tab>
          <Tab>PHP</Tab>
          <Tab>Java</Tab>
          <Tab>Powershell</Tab>
        </TabList>
        <TabPanels>
          <TabPanel textAlign="left">
            <pre className="language-bash">
              <code className="language-bash">
                {`# m h  dom mon dow   command
13 3 * * * /opt/backup.sh && curl -fsS -o /dev/null https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e`}
              </code>
            </pre>
          </TabPanel>

          <TabPanel>
            <pre className="language-python">
              <code className="language-python">
                {`import requests
requests.get("https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e")`}
              </code>
            </pre>
          </TabPanel>

          <TabPanel textAlign="left">
            <pre className="language-javascript">
              <code className="language-javascript">
                {`var https = require('https');
https.get('https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e').on('error', (err) => {
  console.log('Ping failed: ' + err)
});`}
              </code>
            </pre>
          </TabPanel>

          <TabPanel textAlign="left">
            <pre className="language-go">
              <code className="language-go">
                {`req, err := http.NewRequest("POST", "https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e", strings.NewReader(form.Encode()))`}
              </code>
            </pre>
          </TabPanel>

          <TabPanel textAlign="left">
            <pre className="language-php">
              <code className="language-php">
                {`file_get_contents('https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e');`}
              </code>
            </pre>
          </TabPanel>

          <TabPanel textAlign="left">
            <pre className="language-java">
              <code className="language-java">
                {`HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder().uri(URI.create("https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e")).build();`}
              </code>
            </pre>
          </TabPanel>

          <TabPanel textAlign="left">
            <pre className="language-powershell">
              <code className="language-powershell">
                {`Invoke-WebRequest -Uri https://spo.ng/a0615c72-8c6c-4313-99dc-e7f193a31d5e -Method POST`}
              </code>
            </pre>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <style global jsx>{`
        code {
          display: block;
          width: 100%;
          padding: 0.7rem !important;
        }
      `}</style>
    </>
  );
};

export { CodeSnippets };
