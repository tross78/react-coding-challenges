import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { fetchNewReleases, fetchFeaturedPlaylists, fetchCategories } from '../../../api/spotifyAPI';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      isLoading: true
    };
  }

  componentDidMount() {
    Promise.all([
      fetchNewReleases(),
      fetchFeaturedPlaylists(),
      fetchCategories()
    ]).then(([newReleasesData, playlistsData, categoriesData]) => {
      this.setState({
        newReleases: newReleasesData.data.albums.items,
        playlists: playlistsData.data.playlists.items,
        categories: categoriesData.data.categories.items,
        isLoading: false
      });
    }).catch(error => {
      console.error("Error fetching data: ", error);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { newReleases, playlists, categories, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>; // Add your loading UI here
    }

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
