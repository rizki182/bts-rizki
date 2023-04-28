// const axios = require('axios');
// const moment = require('moment');
// const NodeCache = require( "node-cache" );
// const cache = new NodeCache( { stdTTL: 3600, checkperiod: 600 } );

module.exports = {
  get_median(arr){
    let median = 0;
    let median_index = 0;
    let length = arr.length;

    // get index of median of array
    median_index = ((length + 1) / 2) - 1;

    // if median is not decimal don't change median index
    if((length + 1) % 2 == 0){
      median = arr[median_index];

    // if median is decimal don't change median index
    } else {
      median_index = parseInt(median_index)
      median = (arr[median_index] + arr[median_index+1]) / 2;
    }
    return median;
  },

  async index(){
    // try{
    //   // fetch data from API
    //   const response = await axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list');
    //   return response.data;
    // } catch (err) {
    //   throw new Error(err);
    // }
  },
  
  async conversion(){
    // try{
    //   let response = [];

    //   let usd

    //   // get currency from cache if exists
    //   let cached_currency = cache.get("currency");
    //   if ( cached_currency == undefined ){
    //     // fetch from currency conversion API
    //     const currency = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/idr/usd.json');

    //     // save to cache
    //     cache.set("currency", currency.data, 10000 );
    //     usd = currency.data.usd;
    //   } else {
    //     // get from cache
    //     usd = cached_currency.usd;
    //   }


    //   // fetch data from API
    //   const data = await axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list');
    //   for(index in data.data){
    //     let tmp_response = data.data[index];

    //     // add conversion if price is not null
    //     tmp_response.price_usd = (tmp_response.price) ? usd * parseInt(tmp_response.price) : null;

    //     // push to final response
    //     response.push(tmp_response);
    //   }
    //   return response;

    // } catch (err) {
    //   throw new Error(err);
    // }
  },
  
  async aggregate(params){
    // try{
    //   let response = {
    //     aggregate: {},
    //     data: []
    //   };
      
    //   let min_price = 0;
    //   let max_price = 0;
    //   let total_price = 0;
      
    //   let min_size = 0;
    //   let max_size = 0;
    //   let total_size = 0;

    //   let data_price = [];
    //   let data_size = [];
    //   let data_counter = 0;

    //   // start date
    //   let start_date = params.start_date;
    //   let tmp_date = moment(start_date, "YYYY-MM-DD");
    //   start_date = moment(start_date, "YYYY-MM-DD");

    //   // end date
    //   let end_date = moment(tmp_date, "YYYY-MM-DD").add(7, 'days')
    //   end_date = moment(end_date, "YYYY-MM-DD");
      
    //   // fetch data from api
    //   const data = await axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list');

    //   for(index in data.data){
    //     let tgl_parsed = moment(data.data[index].tgl_parsed);
    //     let tmp_response = data.data[index];
    //     if(tmp_response.area_provinsi == params.area_provinsi && tgl_parsed.diff(start_date, 'seconds') >= 0 && tgl_parsed.diff(end_date, 'seconds') < 0){          

    //       // get max price
    //       if(max_price < parseInt(tmp_response.price)){
    //         max_price = parseInt(tmp_response.price);
    //       }
          
    //       // get min price
    //       if(min_price == 0 || min_price > parseInt(tmp_response.price)){
    //         min_price = parseInt(tmp_response.price);
    //       }
          
    //       // get max size
    //       if(max_size < parseInt(tmp_response.size)){
    //         max_size = parseInt(tmp_response.size);
    //       }
          
    //       // get min size
    //       if(min_size == 0 || min_size > parseInt(tmp_response.size)){
    //         min_size = parseInt(tmp_response.size);
    //       }
          
    //       // push data to data array response
    //       response.data.push(tmp_response);

    //       // get total price and size for average calculation
    //       total_price += parseInt(tmp_response.price);
    //       total_size += parseInt(tmp_response.size);

    //       // put all price and size data into array for median calculation
    //       data_price.push(parseInt(tmp_response.price));
    //       data_size.push(parseInt(tmp_response.size));

    //       // get data counter for average calculation
    //       data_counter ++;
    //     }
    //   }

    //   // sort price and size array
    //   data_price = data_price.sort(function(a, b){return a - b});
    //   data_size = data_size.sort(function(a, b){return a - b});

    //   // get price and size median
    //   let median_price = this.get_median(data_price);
    //   let median_size = this.get_median(data_size);

    //   // add aggregate data to aggregate response
    //   response.aggregate = {
    //     min_price: min_price,
    //     max_price: max_price,
    //     average_price: total_price/data_counter,
    //     median_price: median_price,
    //     min_size: min_size,
    //     max_size: max_size,
    //     average_size: total_size/data_counter,
    //     median_size: median_size
    //   };

    //   return response;

    // } catch (err) {
    //   throw new Error(err);
    // }
  }
}