import request from './request'

export function loadApi () {
  return request({
    url: '/plugin/nearbyserviceareareviewcombo?storefronttoken=4cbcb86c-04ae-4949-af96-cd39efb25ab9',
    method: 'get'
  })
}