import { TinaCMS, Tina  } from 'tinacms';
import React from "react";
<Tina cms={cms} >
</Tina>

let cms = new TinaCMS({
    sidebar: {
        position: "displace"
    }
});

import Page from './Page.js';
<Page />
