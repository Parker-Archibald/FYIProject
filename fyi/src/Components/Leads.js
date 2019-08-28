import React from "react";
import '../Styles/Leads.css'

const Leads = ( {lead} ) => {
  return (
    <div id='leadBox'>
      <div id='boxTitle'>Leads baby, we makin money!!<br/></div>
      {lead.name} <br/>{lead.email}<br/>{lead.phone} <br/>{lead.package_type} <br/>{lead.comments}
    </div>
  )
};
export default Leads;
