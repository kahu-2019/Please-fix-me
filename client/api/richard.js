import React from 'react'
import request from 'superagent';

function BusinessPlan() {

  return request.get('/quote')
    .then(res => {
      const plan = res.text
      return plan
    })
}

export default BusinessPlan
