import React from 'react'
import request from 'superagent';

function BusinessPlan() {

  return request.get('http://itsthisforthat.com/api.php?json')
    .then(res => {
      const plan = res.text
      return plan
    })
}

export default BusinessPlan