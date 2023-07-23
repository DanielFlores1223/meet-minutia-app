import { Optional } from 'sequelize';

export interface MinuteAttributes {
	id: string;
	projectName: string;
	slug?: string;
	location: string;
	meetingDateTime: Date;
	objective: string;
	notes?: string;
	nextMeeting: Date;
	token?: string;
	idOwner: string;
	idStatus: number;
}

export interface MinuteCreationAttributes
	extends Optional<MinuteAttributes, 'id'> {}
