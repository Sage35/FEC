import React from 'react';
import Stars from '../shared/Stars.jsx';
import ReviewRatingsBar from './ReviewRatingsBar.jsx'


class ReviewStats extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      widths: {}
    };
    this.averageFinder = this.averageFinder.bind(this);
    this.widthFinder = this.widthFinder.bind(this);
  }



  widthFinder(value, total) {
    console.log(value, this.state.widths)
    var stats = this.props.stats;
    var x = this.state.widths
    if (stats.ratings[value] !== undefined) {

      // console.log((stats.ratings[value] * 80 / this.state.total) + ' px')
      x[value] = (stats.ratings[value] * 80 / total) + 'px';
      this.setState({widths: x});
      return (stats.ratings[value] * 80 / total) + 'px';

    } else {

      x[value] = '0'
      this.setState({widths: x});
      return '0'
    }


  }

averageFinder() {

  var stats = this.props.stats

  var average = 0;
  var total = 0;
  var keys = []

  for (var key in stats.ratings) {
    average += parseInt(key) * stats.ratings[key];
    total += parseInt(stats.ratings[key]);

  }

  var values = ['1', '2', '3', '4', '5']

  for (var key of values) {
    this.widthFinder(key, total)

  }
  average /= total;

  this.setState({average: average, total: total})


}

componentDidUpdate() {
if (this.state.average === undefined) {
  if (Object.keys(this.props.stats).length !== 0) {
    this.averageFinder()
    this.averageFinder()

  }
}

}


render(){



  var bars;

  if ( Object.keys(this.props.stats).length !== 0) {



      if (Object.keys(this.state.widths).length === 5) {
        console.log(this.state.widths)
        bars =   <div>
        <ReviewRatingsBar value = '1' ratings = {this.props.stats.ratings} width = {this.state.widths['1']}  />
        <ReviewRatingsBar value = '2' ratings = {this.props.stats.ratings} width = {this.state.widths['2']}  />
        <ReviewRatingsBar value = '3' ratings = {this.props.stats.ratings} width = {this.state.widths['3']}  />
        <ReviewRatingsBar value = '4' ratings = {this.props.stats.ratings} width = {this.state.widths['4']}  />
        <ReviewRatingsBar value = '5' ratings = {this.props.stats.ratings} width = {this.state.widths['5']} />
        </div>
      } else {
        bars = <p>hi</p>
      }
    return (

    <div className = 'review-stats'>
      <h2>{this.state.average}</h2>
      <Stars total = '3' />
      {/* <div id = 'bar-1'>
        <div id = 'fill'></div>
      </div> */}

      {bars}
    </div>



  )
} else {

  return (
    <p>hello</p>
  )
}
}



}



export default ReviewStats