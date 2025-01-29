/**
 * Home.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import { css } from '../Styles';
import React from 'react';
import { AppUpdate } from 'react-native-update-in-app';
import {
	View,
	Text,
	Button,
	Modal,
	Alert,
	ActivityIndicator,
} from 'react-native';
import Footer from '../components/Footer';

const Home = ({ navigation }) => {
	const [updateData, setUpdateData] = React.useState(null);
	const [modalVisible, setModalVisible] = React.useState(false);
	const [downloadProgress, setDownloadProgress] = React.useState(0);
	const [isDownloading, setIsDownloading] = React.useState(false);

	// Check for updates
	const checkUpdate = React.useCallback(async () => {
		if (Platform.OS === 'ios') {
			Alert.alert('Platform Not Supported', 'iOS is not supported');
			return false;
		}

		try {
			const result = await fetch(
				'https://ghatechnologies.info/pos/update.json',
			);
			const data = await result.json();
			const currentVersionCode = await AppUpdate.getVersionCode();

			if (data.versionCode <= currentVersionCode) {
				Alert.alert('App Status', 'You are using the latest version');
			} else {
				setUpdateData(data);
				setModalVisible(true);
			}
		} catch (error) {
			Alert.alert('Error', `Failed to check for updates: ${error.message}`);
		}
	}, []);

	// Handle download process
	const handleDownload = async () => {
		if (!updateData) {
			Alert.alert('Error', 'Failed to fetch updates ');
			return;
		}

		try {
			setIsDownloading(true);
			await AppUpdate.downloadApp(updateData.url);
		} catch (error) {
			Alert.alert('Error', `Failed to start download: ${error.message}`);
			setIsDownloading(false);
		}
	};

	// Monitor download progress
	React.useEffect(() => {
		const unsubscribe = AppUpdate.onDownloadProgress((event) => {
			switch (event.status) {
				case 'start':
					setDownloadProgress(0);
					break;

				case 'downloading':
					setDownloadProgress(event.progress);
					break;

				case 'end':
					setDownloadProgress(100);
					setIsDownloading(false);
					Alert.alert('Download Complete', 'Installing update...', [], {
						cancelable: false,
					});
					// Install the APK
					AppUpdate.installApp(event.apkFileName).catch((err) =>
						Alert.alert('Installation Error', err.message),
					);
					break;

				case 'error':
					Alert.alert('Download Error', event.errorMessage);
					setIsDownloading(false);
					setDownloadProgress(0);
					break;
			}
		});

		// Cleanup subscription
		return () => unsubscribe();
	}, []);

	// Check for updates when app starts
	React.useEffect(() => {
		checkUpdate();
	}, [checkUpdate]);

	return (
		<View style={css.container}>
			<Text style={css.title}>Welcome to rn-boilerplate!</Text>
			<Text style={css.subtitle}>This is the Home Screen</Text>
			<Button
				title="Go to Page2"
				style={{ marginBottom: 10 }}
				onPress={() => navigation.navigate('Page2')} // Assuming you have a Page 2 screen
			/>
			<Button
				title="Go to Screen1 with Drawer"
				onPress={() => navigation.navigate('DrawerManager')} // Assuming you have a Drawer2 screen
			/>
			<Button title="Check for Updates" onPress={checkUpdate} />
			<Footer />
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => !isDownloading && setModalVisible(false)}
			>
				<View style={css.modalBackground}>
					<View style={css.modalContainer}>
						<Text style={css.modalTitle}>Update Available!</Text>

						{updateData && (
							<>
								<Text style={css.updateMessage}>
									{updateData.updateMessage}
								</Text>

								{isDownloading ? (
									<View style={css.progressContainer}>
										<ActivityIndicator color="#0000ff" />
										<Text style={css.progressText}>
											Downloading: {downloadProgress.toFixed(1)}%
										</Text>
									</View>
								) : (
									<View style={css.buttonContainer}>
										<Button title="Download Update" onPress={handleDownload} />
										<View style={css.buttonSpacer} />
										<Button
											title="Later"
											onPress={() => setModalVisible(false)}
										/>
									</View>
								)}
							</>
						)}
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default Home;
